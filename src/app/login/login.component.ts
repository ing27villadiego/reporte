import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public router: Router,
    private service: SessionService
  ) { }

  ngOnInit() {
  
  }

  IniciarSesion(form:NgForm) {
    if (form.valid) {
      this.router.navigate(['factura']);
    }
  }
    
 

}
