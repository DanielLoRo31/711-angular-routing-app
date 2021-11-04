import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PoderesComponent } from "./poderes/poderes.component";
import { PokemonesComponent } from "./pokemones/pokemones.component";

const routes: Routes = [
  {path: 'poderes', component: PoderesComponent},
  {path: '', component: PokemonesComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule {}