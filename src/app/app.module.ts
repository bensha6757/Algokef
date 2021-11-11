import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { EventsPageComponent } from './pages/app-page/events-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { EventCardComponent } from "./cards/event-card.component";
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    SideNavContentComponent,
    EventsPageComponent,
    PortfolioPageComponent,
    ImagesPageComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
