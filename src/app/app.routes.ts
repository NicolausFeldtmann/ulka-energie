import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChimneySweepComponent } from './chimney-sweep/chimney-sweep.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "chimney-sweep", component: ChimneySweepComponent },
];
