import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Person } from '../../model/person.model';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  people: Person[] = [];
  private userDeletedSubscription!: Subscription;

  constructor(private localStorageService: LocalstorageApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.getPeople();
    this.userDeletedSubscription = this.userService.userDeleted$.subscribe(() => {
      this.getPeople();
    });
  }

  ngOnDestroy(): void {
    this.userDeletedSubscription.unsubscribe();
  }

  getPeople() {
    this.localStorageService.getPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      error => {
        console.log('Erro ao recuperar pessoas:', error);
      }
    );
  }
}
