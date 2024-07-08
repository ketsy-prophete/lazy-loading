import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogRoutingModule } from './dog-routing.module';



@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule
  ]
})
export class DogsModule { }
