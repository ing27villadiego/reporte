import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';
import { Error404Component } from './error404/error404.component'
import { SesionGuard } from './servicios/servicios.index'

const routes: Routes = [
  { 
    path: '', 
    component: FacturaVentaComponent,
    canActivate: [SesionGuard],
    children: [
      {
        path: 'facturas',
        component: FacturaVentaComponent
      },
      {
        path: '',
        redirectTo: '/facturas', 
        pathMatch: 'full'
      }
    ] 
  },
  {
    path: 'sesion',
    component: LoginComponent
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( 
      routes, 
      { 
        useHash: true
      },)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

