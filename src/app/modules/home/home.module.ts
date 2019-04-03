import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HomePageContainer } from 'src/app/containers/home-page/home-page.container';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [

    ProfileComponent,
    MenuComponent,
    BannerComponent,
    HomeComponent,
    NavComponent,
    IconComponent,
    MenuComponent,
    ProfileComponent,
    FooterComponent,
    HomePageContainer
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
