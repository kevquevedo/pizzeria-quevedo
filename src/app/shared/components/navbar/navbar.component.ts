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
  template: `
    <header [class]="headerClass()">
      <nav
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal">
        <div class="flex items-center justify-between h-16">

          <!-- Logo -->
          <a
            href="#hero"
            class="flex items-center gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-quevedo-red focus-visible:outline-offset-2"
            (click)="menuAbierto.set(false)">
            <span class="text-quevedo-red font-bold text-xl tracking-tight">Pizzería</span>
            <span class="text-quevedo-text font-bold text-xl tracking-tight">Quevedo</span>
          </a>

          <!-- Desktop nav -->
          <ul class="hidden md:flex items-center gap-8" role="list">
            @for (link of navLinks; track link.fragment) {
              <li>
                <a
                  [href]="'#' + link.fragment"
                  class="text-quevedo-muted hover:text-quevedo-text text-sm font-medium tracking-widest uppercase transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-quevedo-red focus-visible:outline-offset-2"
                  (click)="menuAbierto.set(false)">
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>

          <!-- Botón hamburguesa -->
          <button
            class="md:hidden p-2 rounded-md text-quevedo-muted hover:text-quevedo-text hover:bg-quevedo-surface-light transition-colors focus-visible:outline-2 focus-visible:outline-quevedo-red"
            [attr.aria-expanded]="menuAbierto()"
            aria-controls="mobile-menu"
            [attr.aria-label]="menuAbierto() ? 'Cerrar menú' : 'Abrir menú'"
            (click)="toggleMenu()">
            @if (menuAbierto()) {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            }
          </button>
        </div>

        <!-- Menú móvil -->
        @if (menuAbierto()) {
          <div id="mobile-menu" class="md:hidden border-t border-quevedo-surface-light py-3">
            <ul class="flex flex-col gap-1" role="list">
              @for (link of navLinks; track link.fragment) {
                <li>
                  <a
                    [href]="'#' + link.fragment"
                    class="block px-4 py-3 text-quevedo-muted hover:text-quevedo-text hover:bg-quevedo-surface-light rounded-md text-sm font-medium tracking-widest uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-quevedo-red"
                    (click)="menuAbierto.set(false)">
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>
        }
      </nav>
    </header>
  `,
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
