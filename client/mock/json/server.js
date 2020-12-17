const jsonServer = require('json-server');
const app = jsonServer.create();
const router = require('./lowdb').getRouter();
const middlewares = jsonServer.defaults();
const fs = require('fs');

// const delayMiddleware = require('./middlewares/delay');
// const errorsMiddleware = require('./middlewares/errors');
// const sseMiddleware = require('./middlewares/sse');

// Set the port of our application
const port = process.env.PORT || 3000;

// Middlewares
app.use(middlewares);
// app.use(delayMiddleware.delay);
// app.use(errorsMiddleware.error);
// app.use(sseMiddleware.sse);

// To handle POST, PUT and PATCH we need to use any body-parser
// We using the one bundled with json-server
app.use(jsonServer.bodyParser);

// Controllers


// Simulate endpoints that fail with 500, 400, 404, 401
app.get('/api/getError500', (req, res, next) => {
    res.sendStatus(500)
});
app.get('/api/customErrorHandlerOn400', (req, res, next) => {
    res.sendStatus(400)
});
app.get('/api/this-doesnt-exist', (req, res, next) => {
    res.sendStatus(404)
});
app.get('/api/admin/*', (req, res, next) => {
    res.sendStatus(401)
});

app.post('/api/logging', (req, res, next) => {
    var body = '';
    let filePath = __dirname + '/logs.txt';

    fs.appendFile(filePath, `${JSON.stringify(req.body)}\n\n`, function() {
        res.sendStatus(200);
    });
});

app.post('/api/translate', (req, res, next) => {
    res.send(req.body.data);
});

// endpoint to test ApiQueueService
app.post('/api/form', (req,res,next) => {
    // respond with delay so that user can block the request or close the Tab
    setTimeout(()=>res.send(req.body.data), 4000)
});

// Rewriter rules
app.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/user/preferences?userId:userId&lang=:lang': '/user-preferences',
    '/api/configuration': 'configuration',
    '/api/people': 'people'
}));

// Mount the router based on lowdb.js
app.use(router);

// Start listening
app.listen(port, () => {
    console.log(`\n\nJSON Server is running! Open the browser at http://localhost:${port}\n\n`);
});

