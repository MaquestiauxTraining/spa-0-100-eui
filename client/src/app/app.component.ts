import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import {
    CONFIG_TOKEN,
    getUserState,
    EuiAppConfig,
    I18nService,
    UserService,
    UserState,
    UxLanguage,
    UxLink
} from '@eui/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { AppStarterService } from './app-starter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    userInfos: UserState;
    // Observe state changes
    userState: Observable<UserState>;
    menuLinks: UxLink[] = [];
    notificationLinks: UxLink[] = [];
    // an array to keep all subscriptions and easily unsubscribe
    subs: Subscription[] = [];

    constructor(
        private translateService: TranslateService,
        private store: Store<any>,
        @Inject(CONFIG_TOKEN) private config: EuiAppConfig,
        private i18nService: I18nService,
        private userService: UserService,
        private appStarterService: AppStarterService,
    ) {
        this.appStarterService.start().subscribe(([i18nStatus, permissionStatus]) => {
            // if (i18nStatus && i18nStatus.success) {
            //     this.appStarterService.observeLanguageChangesAndUpdateUserPreferences();
            //     this.appStarterService.observeUserPrefChangesAndSavePreferences();
            // }
            this._createNotifications();
            this._createMenuLinks();

            // set userState Observable and subscribe to change userInfos upon updates
            this.userState = <any>this.store.select(getUserState);
            this.subs.push(this.userState.subscribe((user: UserState) => {
                    this.userInfos = user;
                }
            ));
        });

        // subscribe for language changes and update menu links
        this.subs.push(this.translateService.onLangChange
            .subscribe((event: LangChangeEvent) => {
                // update menu labels based on selected translation
                this._createMenuLinks();
            }));
    }

    ngOnInit() {
        this._createMenuLinks();
        this._createNotifications();
    }

    ngOnDestroy() {
        this.subs.forEach((s: Subscription) => s.unsubscribe());
    }

    onLanguageChanged(language: UxLanguage) {
        this.translateService.use(language.code);
    }

    private _createMenuLinks() {
        this.menuLinks = [
            new UxLink(
                {
                    label: 'HOME', url: '/screen/home', isHome: true
                }
            ),
            new UxLink(
                {
                    label: 'Module1', url: '/screen/module1', children: [
                        new UxLink({ label: 'disabled item', disabled: true }),
                        new UxLink({ label: 'Page 1', url: '/screen/module1/page1' }),
                        new UxLink({ label: 'Page 2', url: '/screen/module1/page2' })
                    ]
                }
            ),
            new UxLink(
                {
                    label: 'Module2', url: '/screen/module2'
                }
            ),

        ];
    }

    private _createNotifications() {
        this.notificationLinks = [
            new UxLink(
                { label: 'Notification title', subLabel: 'This is the description of the noficiation' }
            ),
            new UxLink(
                { label: 'Notification title', subLabel: 'This is the description of the noficiation' }
            ),
            new UxLink(
                { label: 'Notification title', subLabel: 'This is the description of the noficiation' }
            ),
        ];
    }
}
