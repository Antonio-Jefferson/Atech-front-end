import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteModeComponent } from './delete-mode.component';

describe('DeleteModeComponent', () => {
  let component: DeleteModeComponent;
  let fixture: ComponentFixture<DeleteModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteModeComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
