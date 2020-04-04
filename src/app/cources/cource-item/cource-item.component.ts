import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourcesService } from '../cources.service';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.scss'],
  providers: [CourcesService]
})
export class CourceItemComponent implements OnInit {
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.courseClick.emit(this.course.title);
  }

}
