import { Component, OnInit } from '@angular/core';
import { CourcesService } from '../cources.service';


@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit {
  courses;
  clickedCourseTitle;

  constructor(private _coursesService: CourcesService) { }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
  }
  onCourseClick(ev) {
    console.log(ev);
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }

}
