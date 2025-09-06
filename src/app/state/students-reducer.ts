import { createReducer } from '@ngrx/store';
import { StudentsRecords } from './students-record';

export const initState: ReadonlyArray<StudentsRecords> = [
  {
    name: 'Ram',
    city: 'Rampur',
    country: 'India',
    subject: 'UP',
    passportDeclaration: 'Yes',
    fitnessDeclaration: 'Yes',
    courseName: 'Match',
    date: '14-11-1911',
    state: 'UP',
    subjects: 'Math',
    street: '5th street',
    email: 'ram@gmail.com',
    phone: '123456789',
    postalCode: 445566,
  },
];

export const studentReducer = createReducer(initState);
