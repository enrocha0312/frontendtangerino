import { HomeComponent } from './views/home/home.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbunsCrudComponent} from "./views/albuns-crud/albuns-crud.component";
import {PostsCrudComponent} from "./views/posts-crud/posts-crud.component"
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "albuns",
    component: AlbunsCrudComponent
  },
  {
    path: "posts",
    component: PostsCrudComponent
  },
  {
    path: "usuarios",
    component: UsuarioCrudComponent
  },
  {
    path: "usuarios/criar",
    component: UsuarioCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
