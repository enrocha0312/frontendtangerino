import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { PostsCrudComponent } from './views/posts-crud/posts-crud.component';
import { AlbunsCrudComponent } from './views/albuns-crud/albuns-crud.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioCreateComponent,
    UsuarioCrudComponent,
    PostsCrudComponent,
    AlbunsCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
