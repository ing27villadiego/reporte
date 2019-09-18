import { Component, OnInit } from '@angular/core';
import { SessionService } from '../servicios/servicios.index'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// model de user
import { Usuario } from '../modelos/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public router: Router,
    private sesionService: SessionService
  ) { }
  

  ngOnInit() {
  
  }

  IniciarSesion(form:NgForm) {
    if (form.invalid) {
      return
    }
    let usuario = {
      "CODIGO_USUARIO": form.value.usuario,
      "CLAVE_ACCESO": form.value.password,
      "CODIGO_EMPRESA": "7",
      "COMPANY": "clickoffice_desarrollo"
    }
      
    this.sesionService.iniciarSesion(usuario).subscribe(login => {
      this.router.navigate(['/facturas'])
    })
  }
    
 

}
