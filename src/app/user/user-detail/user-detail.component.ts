import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "kola-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  validateForm: FormGroup;

  marks = {
    0: "A",
    25: "B",
    50: "C",
    75: "D",
    100: "E"
  };
  now = new Date();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      select: ["China"],
      select_multiple: [["Red"]],
      datepicker: [new Date()],
      timepicker: [new Date()],
      input_number: [4],
      switch: [false],
      slider: [0],
      radio_group: [1],
      radio_button: [1]
    });
  }

  submit() {
    this.router.navigateByUrl("home/user/list");
  }
}
