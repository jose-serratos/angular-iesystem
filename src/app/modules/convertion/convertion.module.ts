import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertionRoutingModule } from './convertion-routing.module';
import { ConvertionPageComponent } from './pages/convertion-page/convertion-page.component';


@NgModule({
  declarations: [
    ConvertionPageComponent
  ],
  imports: [
    CommonModule,
    ConvertionRoutingModule
  ]
})
export class ConvertionModule { }
