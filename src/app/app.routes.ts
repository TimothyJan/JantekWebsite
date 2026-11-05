import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { RequestAnRma } from './pages/request-an-rma/request-an-rma';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'request-an-rma', component: RequestAnRma },
  { path: '**', redirectTo: '' } // Fallback
];
