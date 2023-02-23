import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorBoxComponent } from './error-box/error-box.component';
import { SuccessBoxComponent } from './success-box/success-box.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorBoxComponent, SuccessBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // Material
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent, FooterComponent, ErrorBoxComponent, SuccessBoxComponent],
})
export class ComponentsModule {}
