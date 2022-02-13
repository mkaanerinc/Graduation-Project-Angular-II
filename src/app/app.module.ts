import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuredPersonComponent } from './components/insured-person/insured-person.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [AppComponent, InsuredPersonComponent, NaviComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ProgressSpinnerModule,
    ImageModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
