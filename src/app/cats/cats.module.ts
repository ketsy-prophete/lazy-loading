import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './components/cat/cat.component';
import { CatRoutingModule } from './cat-routing.module';



@NgModule({
  declarations: [
    CatComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatsModule { }
