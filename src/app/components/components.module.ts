import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MainComponent } from './main/main.component';
import { CreateRedactComponent } from './create-redact/create-redact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    CreateRedactComponent
  ],
  exports: [
    MainComponent,
    CreateRedactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,

    MatButtonModule,
    MatInputModule
  ]
})
export class ComponentsModule { }
