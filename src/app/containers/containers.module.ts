import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditContainerComponent } from './edit-container/edit-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ComponentsModule } from '../components';



@NgModule({
  declarations: [
    EditContainerComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ContainersModule { }
