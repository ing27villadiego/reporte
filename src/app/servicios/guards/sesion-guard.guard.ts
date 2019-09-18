import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { SessionService } from '../sesion/session.service'

@Injectable()
export class SesionGuard implements CanActivate {
    
    constructor(
        public sesionService: SessionService,
        public router: Router
    ){}

    canActivate(){
        if(this.sesionService.estadoSesion()){
            return true
        }else{
            this.router.navigate(['/sesion'])
            return false
        }
    }
}