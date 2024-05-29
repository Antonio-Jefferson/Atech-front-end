import { TestBed } from '@angular/core/testing';
import { LocalstorageApiService } from './localstorage-api.service';
import { Person } from '../model/person.model';

describe('LocalstorageApiService', () => {
  let service: LocalstorageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageApiService);

    const store: { [key: string]: string } = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string): string | null => {
      return store[key] || null;
    });

    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
      store[key] = value;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a person', (done) => {
    const person: Person = { id: 0, name: 'John Doe', email: 'john@example.com', phone: '1234567890' };
    service.addPerson(person).subscribe((result) => {
      expect(result).toBe(true);
      const storedData = JSON.parse(localStorage.getItem(service['STORAGE_KEY']) || '[]');
      expect(storedData.length).toBe(1);
      expect(storedData[0].name).toBe('John Doe');
      done();
    });
  });

  it('should get all people', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    service.getPeople().subscribe((result) => {
      expect(result.length).toBe(1);
      expect(result[0].name).toBe('John Doe');
      done();
    });
  });

  it('should get a person by ID', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    service.getPersonById(1).subscribe((person) => {
      expect(person).toBeTruthy();
      expect(person?.name).toBe('John Doe');
      done();
    });
  });

  it('should update a person', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    const updatedPerson: Person = { id: 1, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321' };
    service.updatePerson(1, updatedPerson).subscribe((result) => {
      expect(result).toBe(true);
      const storedData = JSON.parse(localStorage.getItem(service['STORAGE_KEY']) || '[]');
      expect(storedData.length).toBe(1);
      expect(storedData[0].name).toBe('Jane Doe');
      done();
    });
  });

  it('should delete a person', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    service.deletePerson(1).subscribe((result) => {
      expect(result).toBe(true);
      const storedData = JSON.parse(localStorage.getItem(service['STORAGE_KEY']) || '[]');
      expect(storedData.length).toBe(0);
      done();
    });
  });

  it('should return false when updating a non-existent person', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    const updatedPerson: Person = { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321' };
    service.updatePerson(2, updatedPerson).subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });

  it('should return false when deleting a non-existent person', (done) => {
    const people: Person[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' }
    ];
    localStorage.setItem(service['STORAGE_KEY'], JSON.stringify(people));

    service.deletePerson(2).subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });
});
