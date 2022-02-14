import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './routes/index/index.component';
import { DisplayTilesComponent } from './components/display-tiles/display-tiles.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, IndexComponent, DisplayTilesComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
