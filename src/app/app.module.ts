import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/home/about/about.component';
import { ServicesComponent } from './components/home/services/services.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditShowcaseComponent } from './components/edit-showcase/edit-showcase.component';
import { HomeComponent } from './components/home/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';
import { DetailsUploadComponent } from './components/edit-showcase/details-upload/details-upload.component';
import { FormUploadComponent } from './components/edit-showcase/form-upload/form-upload.component';
import { ListUploadComponent } from './components/edit-showcase/list-upload/list-upload.component';
import { UploadFileService } from './services/upload-file.service';
import { NavbarTwoComponent } from './components/navbar-two/navbar-two.component';

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
    HomeComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    NavbarTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
