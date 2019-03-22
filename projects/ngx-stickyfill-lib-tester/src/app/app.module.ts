import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxStickyfillModule } from 'ngx-stickyfill-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStickyfillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
