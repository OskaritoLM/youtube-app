import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';


//define rutas aqui
const routes: Routes = [
  // Define tus rutas aquí
  { path: '', component: VideoListComponent },
  // ...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
