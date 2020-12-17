import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterMock } from '../../shared/testing/router.mock';
import { HomeComponent } from './home.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { Pipe, PipeTransform } from '@angular/core';

class TranslateServiceMock {

    onTranslationChange = of({ lang: null });
    onLangChange = of({ lang: null });
    onDefaultLangChange = of({ lang: null });
    lang = 'en';

    constructor() {
    }

    use(lang) {
        return null;
    }

    public get(key: any, interpolateParams?: any): any {
        return of(key);
    }

    public updateValue(key: any, interpolateParams: any, translations: any) {
        return null;
    }

    public transform(query: any) {
        return null;
    }
}

@Pipe({
    name: 'translate'
})
export class TranslateMockPipe implements PipeTransform {
    public name: string = 'translate';

    public transform(query: string, ...args: any[]): any {
        return query;
    }
}

fdescribe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                TranslateMockPipe
            ],
            imports: [
                SharedModule,
            ],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceMock },
                { provide: Router, useClass: RouterMock },
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
