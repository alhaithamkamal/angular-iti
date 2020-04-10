import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course;
  private _routeParamsSubscription: Subscription;
  constructor(
    private _coursesService: CoursesService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._routeParamsSubscription = this._activatedRoute.paramMap.subscribe(
      (paramMap) => {
        if (paramMap.has('id')) {
          const id = paramMap.get('id');
          //this.course = this._coursesService.getCourseById(id);
          this._coursesService.getCourseById(id).subscribe((res: any) => {
            if (res.status) {
              this.course = res.data;
            }
          });
        }
      }
    );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this._routeParamsSubscription.unsubscribe();
  }
}
