import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogoComponent } from '../home/components/catalogo/catalogo.component';

@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [RouterLink, CatalogoComponent],
})
export class MenuComponent {}
