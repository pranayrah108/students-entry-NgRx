import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsRecords } from '../state/students-record';
import { AppState, selectAll } from '../state/students-selectors';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent {
  dataSource: any = [];
  dataSource$: Observable<StudentsRecords[]>;
  displayedColumns: string[] = ['name', 'city', 'country', 'subject','passportDeclaration','fitnessDeclaration','courseName','date','state','street','email','phone','postalCode'];

  constructor(private store: Store<AppState>) {
    this.dataSource$ = this.store.select(selectAll); 
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res;
    });
  }
}
