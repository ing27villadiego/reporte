import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'factura', component: FacturaVentaComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot( 
      routes, 
      { 
        useHash: true 
      } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

