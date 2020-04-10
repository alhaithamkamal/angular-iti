import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  course: Course = new Course();
  constructor(
    private _coursesService: CoursesService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      const course = { ...this.course };
      this._coursesService.addCourse(course).subscribe((res: any) => {
        if (res.status) {
          this._router.navigate(['/courses', res.data.id]);
        }
      });
    }
  }
}
