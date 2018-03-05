import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VotingComponent } from './components/voting/voting.component';
import { ChartsResultComponent } from './components/charts-result/charts-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vote', component: VotingComponent },
  { path: 'result', component: ChartsResultComponent }/*
  { path: 'detail/:id', component: HeroDetailComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
