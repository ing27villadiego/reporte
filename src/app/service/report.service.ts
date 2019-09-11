import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { url_api } from '../config';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private header: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  obtenerFactura(data: any){
    const url:string = url_api + `?
    COMPANY=clickoffice_desarrollo
    &CODIGO_EMPRESA=7
    &CODIGO_PREFIJO=${data.prefijo}
    &NUMERO_FACTURA_INICIAL=${data.inicial}
    &NUMERO_FACTURA_FINAL=${data.final}
    `;
    return this.http.get(
      url,
      {headers: this.header}
    ).pipe(map(data => data));
  }

  
}
