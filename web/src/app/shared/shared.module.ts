import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BlockCopyPasteDirective } from './directives';

@NgModule({
  declarations: [BlockCopyPasteDirective],
  imports: [BrowserModule, HttpClientModule]
})
export class SharedModule {}
