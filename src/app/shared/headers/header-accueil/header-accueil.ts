import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-accueil',
  imports: [CommonModule],
  templateUrl: './header-accueil.html',
  styleUrl: './header-accueil.css',
})
export class HeaderAccueil {
isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
