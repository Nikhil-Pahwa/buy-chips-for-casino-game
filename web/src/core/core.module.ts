import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ExceptionHandler } from './services/';
import { BlockCopyPasteDirective } from './directives';

@NgModule({
  declarations: [BlockCopyPasteDirective],
  exports: [],
  imports: [BrowserModule, HttpModule],
  providers: [ExceptionHandler]
})
export class CoreModule {}
