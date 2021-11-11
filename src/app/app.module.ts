import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { EventCardComponent } from "./cards/event-card.component";
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {DialogContentExample, DialogContentExampleDialog} from '../app/components/dialog-content-example/dialog-content-example';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '18f0c7f4-9a4d-4e6a-830c-70d405b7e18f',
      redirectUri: 'http://localhost:4200'
    }
  });
}
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    SideNavContentComponent,
    AppPageComponent,
    PortfolioPageComponent,
    ServicesPageComponent,
    EventCardComponent,
    DialogContentExample,
    DialogContentExampleDialog,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,    
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }