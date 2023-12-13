import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralComponent } from './general/general.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'general', component: GeneralComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'services', component: ServicesComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
