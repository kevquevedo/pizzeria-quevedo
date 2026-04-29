import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { HeroComponent }     from './components/hero/hero.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { GaleriaComponent }  from './components/galeria/galeria.component';
import { ResenasComponent }  from './components/resenas/resenas.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    ScrollRevealDirective,
    HeroComponent,
    CatalogoComponent,
    GaleriaComponent,
    ResenasComponent,
    UbicacionComponent,
  ],
})
export class HomeComponent {}
