import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* import { GeneratedComponent } from './generated/generated.component'; */
import { LoginComponent } from './components/login/login.component';
import { PersonComponent } from './components/person/person.component';
import { CategoryComponent } from './components/category/category.component';
import { VotingComponent } from './components/voting/voting.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonComponent,
    CategoryComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /* HttpClient, HttpHeaders */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
