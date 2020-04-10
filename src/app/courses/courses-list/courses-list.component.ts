import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses;
  clickedCourseTitle;
  pages: any[];
  currentPage: number = 1;
  constructor(
    private _coursesService: CoursesService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      const params = {};
      queryParamMap.keys.forEach(
        (key) => (params[key] = queryParamMap.get(key))
      );
      this._coursesService.getCourses(params).subscribe((res: any) => {
        if (res.status) {
          this.courses = res.data;
          this.currentPage = res.page;
          this.pages = new Array(res.total_pages || 0);
        }
      });
    });
  }

  onCourseClick(ev) {
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }
}
