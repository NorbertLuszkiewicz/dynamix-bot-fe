import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { GridWrapperComponent } from './grid-wrapper/grid-wrapper.component';

@NgModule({
  declarations: [InfoBoxComponent, GridWrapperComponent],
  exports: [InfoBoxComponent, GridWrapperComponent],
  imports: [CommonModule],
})
export class SharedModule {}
