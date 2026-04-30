import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/menu.component').then(m => m.MenuComponent),
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./features/carrito/carrito.component').then(m => m.CarritoComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
