import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-mode',
  standalone: true,
  imports: [DeleteModeComponent],
  templateUrl: './delete-mode.component.html',
  styleUrl: './delete-mode.component.sass'
})
export class DeleteModeComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteModeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    onCancel(): void {
      this.dialogRef.close(false);
    }

    onConfirm(): void {
      this.dialogRef.close(true);
      window.location.reload();
    }
}
