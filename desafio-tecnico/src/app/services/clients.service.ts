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
  getAllClients(page: number): Observable<clientsInterface[]> {
    return this.httpClient.get<clientsInterface[]>(
      `${API_PATH}Indicacoes?p=${page}&l=5`
    );
  }
  postClient(newClient: clientsInterface): Observable<clientsInterface> {
    return this.httpClient.post<clientsInterface>(
      `${API_PATH}Indicacoes`,
      newClient
    );
  }
  getClientById(id: number): Observable<clientsInterface> {
    return this.httpClient.get<clientsInterface>(`${API_PATH}Indicacoes/${id}`);
  }
  deleteClientbyId(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${API_PATH}Indicacoes/${id}`);
  }
}
