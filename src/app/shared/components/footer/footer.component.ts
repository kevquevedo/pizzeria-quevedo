import { Component, ChangeDetectionStrategy } from '@angular/core';

interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Menú',      fragment: 'menu' },
  { label: 'Nosotros',  fragment: 'nosotros' },
  { label: 'Galería',   fragment: 'galeria' },
  { label: 'Ubicación', fragment: 'ubicacion' },
];

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly navLinks = NAV_LINKS;
}
