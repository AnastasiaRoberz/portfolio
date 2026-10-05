import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        provideHttpClient(),
        provideTranslateService({
            lang: 'en',
            fallbackLang: 'en',
            loader: provideTranslateHttpLoader({
                prefix: './i18n/',
                suffix: '.json',
            }),
        }),
        provideAppInitializer(() => {
            const translate = inject(TranslateService);
            translate.use(translate.getBrowserLang() || 'en');
        }),
    ],
};
