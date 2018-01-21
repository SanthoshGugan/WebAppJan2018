import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceItemComponent } from './place-item/place-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    PlaceItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
