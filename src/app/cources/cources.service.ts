import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {
  private _courseSubject = new BehaviorSubject(null);
  private _courses = [
    {
      id: 1,
      title: 'NodeJs',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 2,
      title: 'JavaScript',
      instructor: 'Mahmoud',
      isAvailabel: false,
    },
    {
      id: 3,
      title: 'HTML',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 4,
      title: 'Angular',
      instructor: 'Eman',
      isAvailabel: false,
    },
  ];
  constructor() { }
  changeCourseData(data) {
    this._courseSubject.next(data);
  }
  get courceSubjectObservable() {
    return this._courseSubject.asObservable();
  }

  getCourses() {
    return this._courses;
  }

  getCourseById(id) {
    return this._courses.find((course) => course.id == id);
  }
}
