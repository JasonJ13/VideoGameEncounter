import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {provideTranslateService, TranslateLoader, TranslateStore} from "@ngx-translate/core";
import {provideTranslateHttpLoader, TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { provideRouter } from "@angular/router";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideTranslateService({
      lang:"fr",
     fallbackLang: 'fr',
     loader: provideTranslateHttpLoader({
      prefix:"./i18n/",
      suffix:".json"
     }),
    }),
  ],
};