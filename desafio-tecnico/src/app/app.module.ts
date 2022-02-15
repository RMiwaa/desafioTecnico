import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './routes/index/index.component';
import { DisplayTilesComponent } from './components/display-tiles/display-tiles.component';
import { TableComponent } from './components/table/table.component';
import { CadastroComponent } from './routes/cadastro/cadastro.component';
import { DetalhesComponent } from './routes/detalhes/detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsService } from './services/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    DisplayTilesComponent,
    TableComponent,
    CadastroComponent,
    DetalhesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ClientsService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
