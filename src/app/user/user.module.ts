import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule } from "@angular/forms";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent, UserListComponent, UserDetailComponent]
})
export class UserModule {}
