import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgZorroAntdModule } from "ng-zorro-antd";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgZorroAntdModule],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule {}
