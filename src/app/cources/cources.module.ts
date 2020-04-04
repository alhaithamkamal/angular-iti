import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CourceItemComponent } from './cource-item/cource-item.component';
import { CourceDetailsComponent } from './cource-details/cource-details.component';
import { CourcesService } from './cources.service';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [CourceListComponent, CourceItemComponent, CourceDetailsComponent, CoursesComponent],
  imports: [
    CommonModule
  ],
  providers: [CourcesService],
  exports: [CoursesComponent]

})
export class CourcesModule { }
