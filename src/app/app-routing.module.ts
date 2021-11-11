import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsPageComponent } from './pages/app-page/events-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsPageComponent
  },
  {
    path: 'images',
    component: ImagesPageComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
