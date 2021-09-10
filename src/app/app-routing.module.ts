import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

const routes:Routes = [
  {path:'main', component:MainComponent},
  {path:'tiempo', component:TiempoComponent},
  //en caso que no se escriba nada ir al main
  {path:'', redirectTo:'/main', pathMatch:'full'},
  //en caso que el se escriba una ruta mal
  {path:'**', component:MainComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
