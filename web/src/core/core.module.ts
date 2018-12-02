import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ExceptionHandler } from './services/';
import { BlockCopyPasteDirective } from './directives';

@NgModule({
  declarations: [BlockCopyPasteDirective],
  exports: [],
  imports: [BrowserModule, HttpClientModule],
  providers: [ExceptionHandler]
})
export class CoreModule {}
