import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ReceipeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
