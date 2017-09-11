import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { StudentService } from "../student.service";

@Component({
  providers: [HttpClient, HttpParams, StudentService],
  selector: "kola-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: "male", value: false },
    { name: "female", value: false }
  ];

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  constructor(private _studentService: StudentService) {}

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const selectedGender = this._filterGender
      .filter(item => item.value)
      .map(item => item.name);
    this._studentService
      .getUsers(
        this._current,
        this._pageSize,
        "name",
        this._sortValue,
        selectedGender
      )
      .subscribe((data: any) => {
        this._loading = false;
        this._total = 200;
        this._dataSet = data.results;
      });
  }

  ngOnInit() {
    this.refreshData();
  }
}
