import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./app/login-page/login-page.component').then(
        m => m.LoginPageComponent
      ),
  },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      {
        path: 'main',
        loadComponent: () =>
          import('./app/main/main.component').then(
            m => m.MainComponent
          ),
      },
    ],
  },
];

bootstrapApplication(AppComponent, { providers: [
    provideRouter(routes)
    ]
  }
);
