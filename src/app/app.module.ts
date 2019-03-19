import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildModule.forRoot('Hello world!')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
