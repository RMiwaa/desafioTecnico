import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  inputData: any;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {}
}
