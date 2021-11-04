import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { PokemonesRoutingModule } from './pokemones-routing.module';
import { PoderesComponent } from './poderes/poderes.component';



@NgModule({
  declarations: [
    PokemonesComponent,
    PoderesComponent
  ],
  imports: [
    CommonModule,
    PokemonesRoutingModule
  ],
  exports: [
    PokemonesComponent
  ]
})
export class PokemonesModule { }
