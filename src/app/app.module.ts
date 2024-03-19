import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { BookingsComponent } from './Pages/bookings/bookings.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './Pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { TrainsComponent } from './Pages/trains/trains.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingsComponent,
    PageNotFoundComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    TrainsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, MatDialogModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
