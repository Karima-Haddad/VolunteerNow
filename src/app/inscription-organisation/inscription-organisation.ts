// src/app/inscription-organisation/inscription-organisation.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription-organisation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription-organisation.html',
  styleUrl: './inscription-organisation.css'
})
export class InscriptionOrganisationComponent {  // ← CORRIGÉ
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Organisation inscrite →', form.value);
    }
  }

  openChatbot() {
    alert('Besoin d’aide pour inscrire votre organisation ?\nJe vous guide pas à pas !');
  }
}