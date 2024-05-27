import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { LocalstorageApiService } from '../../services/localstorage-api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MainLayoutComponent, ReactiveFormsModule, TitleComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent  implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageApiService) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formulario.valid) {
      this.localStorageService.addPerson(this.formulario.value).subscribe(
        () => {
          console.log('Cadastro realizado com sucesso!');
          alert('Cadastro realizado com sucesso!');
        },
        error => {
          console.error('Erro ao salvar os dados:', error);
          alert('Erro ao salvar os dados. Por favor, tente novamente.');
        }
      );
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
