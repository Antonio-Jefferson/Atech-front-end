import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../model/person.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule,  CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() person: Person | undefined;
  deletePerson(id: number){}
}
