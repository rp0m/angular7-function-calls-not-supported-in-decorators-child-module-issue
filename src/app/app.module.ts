import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';
import { environment } from 'src/environments/environment';

export function greetingGetter() {
  return 'Hello world!';
}

export function isProductionGetter() {
  return environment.production;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildModule.forRoot({
      config: {
        greetingGetter: greetingGetter,
        isProductionGetter: isProductionGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
