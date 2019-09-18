import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionGuard, SessionService } from './servicios.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SessionService,
    SesionGuard
  ],
  declarations: []
})
export class ServiciosModule { }