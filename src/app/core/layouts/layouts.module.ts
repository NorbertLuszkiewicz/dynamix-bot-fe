import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LayoutMainComponent],
  exports: [LayoutMainComponent],
  imports: [CommonModule, ComponentsModule],
})
export class LayoutsModule {}
