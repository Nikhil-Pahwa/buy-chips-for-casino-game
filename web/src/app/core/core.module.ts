import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExceptionHandler } from './services/';

@NgModule({
  exports: [],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: ExceptionHandler }]
})
export class CoreModule {}
