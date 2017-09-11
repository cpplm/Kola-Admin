import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";

const routes: Routes = [
  {
    path: "",
    component: StudentComponent,
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: StudentListComponent },
      { path: "detail", component: StudentDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
