import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  clients: Array<any> = new Array();

  constructor(private clientsService: ClientsService) {}
  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients() {
    this.clientsService.getAllClients().subscribe((clients) => {
      this.clients = clients;
    });
  }
}
