import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { EditShowcaseComponent } from './components/edit-showcase/edit-showcase.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = 
[
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'Gallery', 
    component: GalleryComponent 
  },
  { 
    path: 'Login', 
    component: LoginComponent 
  },
  {
    path: 'Edit',
    component: EditShowcaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule(
{
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
