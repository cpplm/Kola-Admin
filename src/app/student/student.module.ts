import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule } from "@angular/forms";

import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentService } from "./student.service";

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  providers: [StudentService]
})
export class StudentModule {}
