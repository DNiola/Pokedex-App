import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

//   import { enableProdMode } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { AppComponent } from './app/app.component';
// import { environment } from './environments/environment';
// import { provideRouter } from '@angular/router';
// import { APP_ROUTES } from './app/app-routing.module';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(withInterceptorsFromDi()),
//     provideRouter(APP_ROUTES)
//   ],
// }).catch(err => console.error(err));
