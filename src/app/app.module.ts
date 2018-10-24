import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserService } from './shared/user.service';

const appRoutes: Routes = [
  { path:'', 
    component:HomePageComponent 
  },
  { path:'userlist', 
    component:ListUserComponent 
  },
  { path:'userform', 
    component: UserFormComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ UserService ] ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
