import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { VideoListComponent } from './video-list/video-list.component'; // Asegúrate de importar el componente
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa tu AppRoutingModule o el nombre de tu archivo de rutas

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Agrega RouterModule aquí
    AppRoutingModule, // Agrega tu AppRoutingModule aquí
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }