import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { RequestAnRma } from './pages/request-an-rma/request-an-rma';
import { Products } from './pages/products/products';
import { TimeAndAttendanceSoftware } from './pages/time-and-attendance-software/time-and-attendance-software';
import { DataCollectionTimeClocks } from './pages/data-collection-time-clocks/data-collection-time-clocks';
import { PayrollInterfaces } from './pages/payroll-interfaces/payroll-interfaces';
import { JantekAccessControlSecuritySystem } from './pages/jantek-access-control-security-system/jantek-access-control-security-system';
import { JantekJupiterTimeAndAttendanceSystem } from './pages/jantek-jupiter-time-and-attendance-system/jantek-jupiter-time-and-attendance-system';
import { Jobcosting } from './pages/jobcosting/jobcosting';
import { JantekTimeAndAttendanceAddOnModules } from './pages/jantek-time-and-attendance-add-on-modules/jantek-time-and-attendance-add-on-modules';
import { Upgrade831832 } from './pages/upgrade-831-832/upgrade-831-832';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '831_832_upgrade', component: Upgrade831832 },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'data-collection-time-clocks', component: DataCollectionTimeClocks },
  { path: 'jantek-access-control-security-system', component: JantekAccessControlSecuritySystem },
  { path: 'jantek-time-and-attendance-add-on-modules', component: JantekTimeAndAttendanceAddOnModules },
  { path: 'jantek-jupiter-time-and-attendance-system', component: JantekJupiterTimeAndAttendanceSystem },
  { path: 'jobcosting', component: Jobcosting },
  { path: 'payroll-interfaces', component: PayrollInterfaces },
  { path: 'products', component: Products },
  { path: 'request-an-rma', component: RequestAnRma },
  { path: 'time-and-attendance-software', component: TimeAndAttendanceSoftware },
  { path: '**', redirectTo: '' } // Fallback
];
