import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { FormmodulComponent } from './formmodul/formmodul.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ServicesComponent,

    FormmodulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  MaterialModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
