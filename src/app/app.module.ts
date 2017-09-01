import { BColorService } from './services/b-color.service';
import { ProjectsService } from './services/projects.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routerConfig } from './app.routing';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { JournalComponent } from './journal/journal.component';
import { JournalPostComponent } from './journal-post/journal-post.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    IntroComponent,
    MainComponent,
    AboutComponent,
    JournalComponent,
    JournalPostComponent,
    PortfolioComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(environment.firebase, 'app-firebase'),
    AngularFireDatabaseModule
  ],
  providers: [
    ProjectsService,
    BColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
