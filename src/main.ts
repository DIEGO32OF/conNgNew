import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';
//import { WfaNg2Module } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//getHttp().get('/assets/config.json').toPromise()
  // .then((res: Response) => {
  //     let conf = res.json();
   //    environment.settings = conf;
   //    platformBrowserDynamic().bootstrapModule(createAppModule(conf));
//});

//document.addEventListener('DOMContentLoaded', function () {
//  platformBrowserDynamic().bootstrapModule(WfaNg2Module, []);
//}, false);
