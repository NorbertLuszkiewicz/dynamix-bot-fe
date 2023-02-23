import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './core/layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { ErrorHandlerService } from './core/error-handler.service';
import { AuthService } from './core/auth/auth.service';
import { ComponentsModule } from './core/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutsModule,
    // Global routing module
    PagesModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [AuthService, ErrorHandlerService, { provide: ErrorHandler, useClass: ErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
