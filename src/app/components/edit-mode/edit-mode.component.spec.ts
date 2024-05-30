import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { EditModeComponent } from './edit-mode.component';
import { DeleteModeComponent } from '../delete-mode/delete-mode.component';
import { TitleComponent } from '../title/title.component';

describe('EditModeComponent', () => {
  let component: EditModeComponent;
  let fixture: ComponentFixture<EditModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        TitleComponent,
        DeleteModeComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { user: { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '12345678901' } } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
