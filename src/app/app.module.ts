import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/home/about/about.component';
import { ServicesComponent } from './components/home/services/services.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditShowcaseComponent } from './components/edit-showcase/edit-showcase.component';
import { HomeComponent } from './components/home/home/home.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    SliderComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    GalleryComponent,
    EditShowcaseComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
