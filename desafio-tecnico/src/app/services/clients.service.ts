import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { clientsInterface } from '../Interfaces/clientsInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private httpClient: HttpClient) {}
  getAllClients(): Observable<any> {
    return this.httpClient.get<clientsInterface>(`${API_PATH}Indicacoes`);
  }
}
