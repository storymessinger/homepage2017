import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: IntroComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    // {
    //     path: 'main',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);


