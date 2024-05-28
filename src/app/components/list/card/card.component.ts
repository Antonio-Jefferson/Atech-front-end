import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../model/person.model';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageApiService } from '../../../services/localstorage-api.service';
import { DeleteModeComponent } from '../../delete-mode/delete-mode.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule,  CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() person: Person | undefined;
  constructor(private dialog: MatDialog, private localStorageService: LocalstorageApiService) {}

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteModeComponent, {
      width:'700px',
      height:'300px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePerson(id);
      }
    });
  }

  deletePerson(id: number): void {
    this.localStorageService.deletePerson(id).subscribe(() => {
      console.log('User deleted successfully');
    });
  }
}
