import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExceptionHandler } from './services/';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: ExceptionHandler }]
})
export class CoreModule {}
