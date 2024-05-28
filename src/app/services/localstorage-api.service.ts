import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageApiService {
  private STORAGE_KEY = 'people';

  constructor() { }

  private getDataFromStorage(): Person[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveDataToStorage(data: Person[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));

  }

  addPerson(person: Person): Observable<any> {
    const people = this.getDataFromStorage();
    person.id = people.length + 1;
    people.push(person);
    this.saveDataToStorage(people);
    return of(true);
  }

  getPeople(): Observable<Person[]> {
    return of(this.getDataFromStorage());
  }

  getPersonById(id: number): Observable<Person | undefined> {
    const people = this.getDataFromStorage();
    const person = people.find(p => p.id === id);
    return of(person);
  }

  updatePerson(id: number, person: Person): Observable<any> {
    const people = this.getDataFromStorage();
    const index = people.findIndex(p => p.id === id);
    if (index !== -1) {
      people[index] = { ...person, id };
      this.saveDataToStorage(people);
      return of(true);
    }
    return of(false);
  }

  deletePerson(id: number): Observable<boolean> {
    const people = this.getDataFromStorage();
    const index = people.findIndex(p => p.id === id);
    if (index !== -1) {
      people.splice(index, 1);
      this.saveDataToStorage(people);
      return of(true);
    }
    return of(false);
  }
}
