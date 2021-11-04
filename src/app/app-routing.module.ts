import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
  {path: 'pokemones', loadChildren: () => import('./pokemones/pokemones.module').then((mod) => mod.PokemonesModule)},
  {path: 'regiones', loadChildren: () => import('./regiones/regiones.module').then((mod) => mod.RegionesModule)},
  {path: '**', redirectTo: 'pokemones'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}