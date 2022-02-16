import { Component, OnInit } from '@angular/core';
import { clientsInterface } from 'src/app/Interfaces/clientsInterface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ClientsService],
})
export class TableComponent implements OnInit {
  clients!: clientsInterface[];

  constructor(private clientsService: ClientsService) {
    this.getAllClients();
  }
  ngOnInit(): void {}

  deleteClient(id: number) {
    this.clientsService.deleteClientbyId(id).subscribe(() => {
      this.getAllClients();
    });
  }

  getAllClients() {
    this.clientsService
      .getAllClients()
      .subscribe((data: clientsInterface[]) => {
        this.clients = data;
      });
  }
}
