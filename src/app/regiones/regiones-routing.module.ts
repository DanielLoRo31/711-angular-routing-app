import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegionesComponent } from "./regiones/regiones.component";

const routes: Routes = [
  {path: '', component: RegionesComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionesRoutingModule {}