import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './backend/projects/projects.component';
import { ProjectsListComponent } from './frontend/projects-list/projects-list.component';
import { NavbarComponent } from './frontend/navbar/navbar.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProjectsMapsComponent } from './frontend/projects-maps/projects-maps.component';
import { GeolocationService } from './frontend/geolocation.service';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects-list', component: ProjectsListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'projects-map', component: ProjectsMapsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsMapsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps_api_key
    })
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
