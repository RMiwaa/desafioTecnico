import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './routes/cadastro/cadastro.component';
import { DetalhesComponent } from './routes/detalhes/detalhes.component';
import { IndexComponent } from './routes/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhes', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
