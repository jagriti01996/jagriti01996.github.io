import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PersonaComponent } from './persona/persona.component';
import { DaylogComponent } from './daylog/daylog.component';
import { EnablerComponent } from './enabler/enabler.component';


const routes: Routes = [
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'persona',
    component:PersonaComponent
  },
  {
    path:'daylog',
    component:DaylogComponent
  },
  {
    path:'enabler',
    component:EnablerComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/intro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
