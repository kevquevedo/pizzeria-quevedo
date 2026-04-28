import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-quevedo-bg">
      <!-- Catálogo completo se agrega aquí -->
    </div>
  `,
})
export class MenuComponent {}
