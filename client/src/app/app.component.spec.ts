import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
    UxAppShellService,
} from '@eui/core';
import {
    SharedModule,
} from './shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';
import { AppRoutingModule } from './app-routing.module';
import { TranslateService } from '@ngx-translate/core';
import { RouterMock } from './shared/testing/router.mock';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

class UxAppShellServiceMock {
    state$ = of(null);
}

class TranslateServiceMock {
    use(lang) {
        return null;
    }
}

describe('App: Angular', () => {
    let uxAppShellService: UxAppShellService;
    let translateService: TranslateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                SharedModule,
                AppRoutingModule,
                RouterTestingModule
            ],
            providers: [
                provideMockStore({ }),
                { provide: Router, useClass: RouterMock },
                { provide: UxAppShellService, useClass: UxAppShellServiceMock },
                { provide: TranslateService, useClass: TranslateServiceMock },
            ]
        });

        uxAppShellService = TestBed.inject(UxAppShellService);
        translateService = TestBed.inject(TranslateService);
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should create instance for translateService', async(() => {
        expect(translateService).toBeTruthy();
    }));

    it('should create instance for uxAppShellService', async(() => {
        expect(uxAppShellService).toBeTruthy();
    }));
});
