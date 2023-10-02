import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ion } from 'cesium';
import * as Cesium from 'cesium';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';
(window as Record<string, any>)['Cesium'] = Cesium;

Ion.defaultAccessToken = environment.accessToken;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
