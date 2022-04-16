import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePageComponent } from './pages/date-page/date-page.component';

const routes: Routes = [
  {
    path: '',
    component: DatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateRoutingModule { }
