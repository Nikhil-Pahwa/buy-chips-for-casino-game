import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockCopyPasteDirective } from './directives/block-copy-paste-directive';

@NgModule({
  declarations: [BlockCopyPasteDirective],
  imports: [CommonModule],
  exports: [BlockCopyPasteDirective],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
