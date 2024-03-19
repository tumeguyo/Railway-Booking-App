import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { BookingsComponent } from './Pages/bookings/bookings.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { TrainsComponent } from './Pages/trains/trains.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
