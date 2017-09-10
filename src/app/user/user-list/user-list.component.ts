import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "kola-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;
  data = [];

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 3 : true;
    });
  }

  resetForm() {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.validateForm = this.fb.group({});

    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 3 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }

    for (let i = 0; i < 100; i++) {
      this.data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }

  create() {
    this.router.navigateByUrl("/home/user/detail");
  }
}
