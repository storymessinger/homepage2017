import { JournalComponent } from './journal/journal.component';
import { JournalPostComponent } from './journal-post/journal-post.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routerConfig: Routes = [
    { 
        path: '', 
        redirectTo: 'main',
        pathMatch: 'full'
    },
    { 
        path: 'intro', 
        component: IntroComponent

    },
    {
        path: 'portfolio',
        component: PortfolioComponent 
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'about',
        component: AboutComponent 
    },
    {
        path: 'journal',
        component: JournalComponent 
    },
    {
        path: 'post/:id',
        component: JournalPostComponent
    }
    // {
    //     path: 'main',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
];



