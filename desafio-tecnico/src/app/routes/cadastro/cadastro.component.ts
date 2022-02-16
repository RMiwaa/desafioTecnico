import { Component, OnInit } from '@angular/core';
import { clientsInterface } from 'src/app/Interfaces/clientsInterface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  inputData = {} as clientsInterface;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {}
  postClient(newClient: clientsInterface) {
    this.clientsService.postClient(newClient).subscribe();
  }
}
