import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploisListComponent } from './emplois-list/emplois-list.component';
import { EmploisDetailsComponent } from './emplois-details/emplois-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploisListComponent,
    EmploisDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
