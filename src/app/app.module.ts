import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Error404Component } from './error404/error404.component'

// module de services
import { ServiciosModule } from './servicios/servicios.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacturaVentaComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
