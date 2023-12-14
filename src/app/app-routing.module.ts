import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GeneralComponent } from './pages/general/general.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'inicio', component: GeneralComponent},
  { path: 'login', component: LogInComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
