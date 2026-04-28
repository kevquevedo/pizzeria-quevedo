import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-quevedo-bg">
      <!-- Secciones de la home se agregan aquí -->
    </div>
  `,
})
export class HomeComponent {}
