import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { MenuComponent } from './menu/menu.component';
import { ReadmeComponent } from './detailed-page/readme/readme.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailedPageComponent,
    MenuComponent,
    ReadmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
