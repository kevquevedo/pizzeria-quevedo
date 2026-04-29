import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface ImagenGaleria {
  readonly src: string;
  readonly alt: string;
}

const IMAGENES: ImagenGaleria[] = [
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&h=700&fit=crop', alt: 'Pizza Muzzarella de cerca' },
  { src: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=700&h=700&fit=crop', alt: 'Preparación artesanal de pizza' },
  { src: 'https://images.unsplash.com/photo-1510526685373-74ab69a63e97?w=700&h=700&fit=crop', alt: 'Horno de barro encendido' },
  { src: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=700&h=700&fit=crop', alt: 'Pizza margherita recién salida del horno' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=700&fit=crop', alt: 'Ambiente de la pizzería' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&h=700&fit=crop', alt: 'Pizza con toppings variados' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&h=700&fit=crop', alt: 'Interior del restaurante de noche' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=700&fit=crop', alt: 'Pizza napolitana clásica' },
];

@Component({
  selector: 'app-galeria',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  imports: [ScrollRevealDirective],
})
export class GaleriaComponent {
  protected readonly imagenes = IMAGENES;
}
