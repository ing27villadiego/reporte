import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { url_api } from '../../config'

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  
  obtenerFactura(data: any) {

    const token = localStorage.getItem('token_key')

    const header: HttpHeaders = new HttpHeaders({
                    "Content-Type": "application/json",
                  }).set("api-key", token);

    const url: string = url_api + `?
    COMPANY=clickoffice_desarrollo
    &CODIGO_EMPRESA=7
    &CODIGO_PREFIJO=${data.prefijo}
    &NUMERO_FACTURA_INICIAL=${data.inicial}
    &NUMERO_FACTURA_FINAL=${data.final}
    `;
    return this.http.get(url, { headers: header }).pipe(map(data => data));
  }
}

