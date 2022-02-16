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
  page = 1;

  constructor(private clientsService: ClientsService) {
    this.getAllClients(this.page);
  }
  ngOnInit(): void {}

  deleteClient(id: number) {
    this.clientsService.deleteClientbyId(id).subscribe(() => {
      this.getAllClients(this.page);
    });
  }

  getAllClients(page: number) {
    this.clientsService
      .getAllClients(page)
      .subscribe((data: clientsInterface[]) => {
        this.clients = data;
      });
  }
  nextPage() {
    this.page++;
    this.getAllClients(this.page);
  }
  previousPage() {
    this.page--;
    this.getAllClients(this.page);
  }
}
