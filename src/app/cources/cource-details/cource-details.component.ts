import { Component, OnInit } from '@angular/core';
import { CourcesService } from '../cources.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cource-details',
  templateUrl: './cource-details.component.html',
  styleUrls: ['./cource-details.component.scss']
})
export class CourceDetailsComponent implements OnInit {
  course;
  private _courseSubscription: Subscription;
  constructor( private _coursesService: CourcesService, ) {
    
   }

  ngOnInit(): void {
    this._courseSubscription = this._coursesService.courceSubjectObservable.subscribe(
      (data) => {
        console.log(data);
        if (data && typeof data === 'object') {
          this.course = data;
        }
      }
    );
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this._courseSubscription.unsubscribe();
  }

}
