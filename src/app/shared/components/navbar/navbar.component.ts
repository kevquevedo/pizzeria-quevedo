import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';

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
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly doc = inject(DOCUMENT);

  protected readonly menuAbierto = signal(false);
  protected readonly navLinks = NAV_LINKS;

  protected readonly scrolled = toSignal(
    fromEvent(this.doc.defaultView!, 'scroll').pipe(
      map(() => (this.doc.defaultView?.scrollY ?? 0) > 50),
      startWith(false),
    ),
    { initialValue: false },
  );

  protected readonly headerClass = computed(() =>
    this.scrolled()
      ? 'fixed inset-x-0 top-0 z-50 bg-quevedo-surface/95 backdrop-blur-sm shadow-lg transition-all duration-300'
      : 'fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300',
  );

  protected toggleMenu(): void {
    this.menuAbierto.update(v => !v);
  }
}
