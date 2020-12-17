module.exports = async (app, db) => {
    const data = await db;

    app.get('/configuration-service', (req, res) => {
        res.send(Object.create({...data.get('config'), rand: Math.random()}));
    });

};
