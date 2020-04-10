import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  // providers: [CoursesService]
})
export class CourseItemComponent implements OnInit {
  // @Input() title: string;
  // @Input() instructor: string;
  // @Input() isAvailabel: boolean;
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.courseClick.emit(this.course.title);
  }
}
