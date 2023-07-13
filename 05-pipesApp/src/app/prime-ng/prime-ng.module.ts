import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
