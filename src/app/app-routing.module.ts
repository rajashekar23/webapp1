import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageContainer } from './containers/home-page/home-page.container';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {path:"", component:HomePageContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
