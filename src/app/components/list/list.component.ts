import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Person } from '../../model/person.model';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  people: Person[] = [];

  constructor(private localStorageService: LocalstorageApiService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.localStorageService.getPeople().subscribe(
      (data: Person[]) => {
        console.log(data)
        this.people = data;
      },
      error => {
        console.log('Erro ao recuperar pessoas:', error);
      }
    );
  }
}
