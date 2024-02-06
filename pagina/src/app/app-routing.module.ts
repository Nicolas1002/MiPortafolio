import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [

  {
    path: "aboutme", component: AboutMeComponent
  },
  {
    path: "home", component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
