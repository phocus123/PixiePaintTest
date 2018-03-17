// Modules.

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components.

import { AppComponent } from './app.component';
import { AboutComponent } from './components/home/about/about.component';
import { ServicesComponent } from './components/home/services/services.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { InstaFeedComponent } from './components/gallery/insta-feed/insta-feed.component';
import { FormUploadComponent } from './components/edit/form-upload/form-upload.component';
import { ListUploadComponent } from './components/edit/list-upload/list-upload.component';
import { DetailsUploadComponent } from './components/edit/details-upload/details-upload.component';

// Firebase.

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';

// Services.

import { UploadFileService } from './services/upload-file.service';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UploadMessageService } from './services/upload-message.service';
import { DetailsMessagesComponent } from './components/edit/details-messages/details-messages.component';

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
    EditComponent,
    HomeComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    LoginFormComponent,
    InstaFeedComponent,
    NotFoundComponent,
    DetailsMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UploadMessageService,
    UploadFileService,
    AuthService,
    UploadMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
