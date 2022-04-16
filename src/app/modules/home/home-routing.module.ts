import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'welcome',
    loadChildren: () => import(`@modules/welcome/welcome.module`).then(m=>m.WelcomeModule)
  },


  {
    path:'convertion',
    loadChildren: () => import(`@modules/convertion/convertion.module`).then(m=>m.ConvertionModule)
  },
  
  {
    path:'date',
    loadChildren: () => import(`@modules/date/date.module`).then(m=>m.DateModule)
  },
  {
    path:'form',
    loadChildren: () => import(`@modules/form/form.module`).then(m=>m.FormModule)
  },

  {
    path: '**',
    redirectTo: '/welcome'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
