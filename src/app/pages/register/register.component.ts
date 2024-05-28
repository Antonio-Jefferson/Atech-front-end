import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { LocalstorageApiService } from '../../services/localstorage-api.service';
import { Router} from '@angular/router'
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule, TitleComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent  implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageApiService,
    private router: Router,private natification: NotificationService) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formulario.valid) {
      this.localStorageService.addPerson(this.formulario.value).subscribe(
        () => {
          this.router.navigate(['/']);
          this.natification.showSuccess('Usuário criado com sucesso')
        },
        error => {
          this.natification.showError('Ocorreu um erro ao salvar')
        }
      );
    } else {
      this.natification.showError('Preencha todos os campos corretamente.');
    }
  }
}
