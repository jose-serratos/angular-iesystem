import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertionPageComponent } from './pages/convertion-page/convertion-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConvertionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertionRoutingModule { }
