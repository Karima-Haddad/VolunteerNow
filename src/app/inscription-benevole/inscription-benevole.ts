// src/app/inscription-benevole/inscription-benevole.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription-benevole',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription-benevole.html',
  styleUrl: './inscription-benevole.css'
})
export class InscriptionBenevoleComponent {
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid && this.countInterets(form) >= 2) {
      this.submitted = true;
      console.log('Inscription OK →', form.value);
    }
  }

  countInterets(form: NgForm): number {
    const keys = ['ecologie', 'solidarite', 'education', 'sante', 'culture', 'sport'];
    return keys.filter(k => form.value[k]).length;
  }

  openChatbot() {
    alert('Besoin d’aide ?\nJe suis là pour vous guider !');
  }
}