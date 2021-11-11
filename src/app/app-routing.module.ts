import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AppComponent } from './app.component';  
import { MicrosoftLoginGuard } from './microsoft-login.guard';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { PublicPageComponent } from './public-page/public-page.component';


const routes: Routes = [
  {
    path :'public-page',
    component: PublicPageComponent
  },
  {
    path :'restricted-page',
    component: RestrictedPageComponent,
     canActivate: [MicrosoftLoginGuard]
  },
  {
    path: '**', 
  component: PublicPageComponent
},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'apps',
    component: AppPageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
