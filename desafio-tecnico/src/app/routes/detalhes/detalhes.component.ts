import { Component, OnInit } from '@angular/core';
import { clientsInterface } from 'src/app/Interfaces/clientsInterface';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  detailedClient!: clientsInterface;
  id!: number;
  private sub: any;

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  ngOnInit(): void {
    this.clientService.getClientById(this.id).subscribe((data) => {
      this.detailedClient = data;
      console.log(this.detailedClient);
    });
  }
}
