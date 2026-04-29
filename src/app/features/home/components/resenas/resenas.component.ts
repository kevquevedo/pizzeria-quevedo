import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Resena {
  readonly nombre: string;
  readonly iniciales: string;
  readonly estrellas: number;
  readonly texto: string;
  readonly fecha: string;
}

const RESENAS: Resena[] = [
  {
    nombre: 'Martina García',
    iniciales: 'MG',
    estrellas: 5,
    texto: 'La mejor pizza de Buenos Aires, sin ninguna duda. La masa es increíble, super aireada con ese borde crocante. Fui con amigos un sábado y quedamos todos fascinados.',
    fecha: 'Marzo 2025',
  },
  {
    nombre: 'Diego Romero',
    iniciales: 'DR',
    estrellas: 5,
    texto: 'Probé la Napolitana y la Calabresa. Las dos perfectas. El horno de barro marca una diferencia enorme. El tiramisú de postre es una genialidad. Definitivamente vuelvo.',
    fecha: 'Febrero 2025',
  },
  {
    nombre: 'Luciana Torres',
    iniciales: 'LT',
    estrellas: 5,
    texto: 'El ambiente es increíble, oscuro y súper acogedor. Todo el equipo es muy cálido. Llegamos sin reserva y nos recibieron genial. Ya tienen clientes fijos.',
    fecha: 'Enero 2025',
  },
  {
    nombre: 'Sebastián Vidal',
    iniciales: 'SV',
    estrellas: 5,
    texto: 'Vine desde Rosario especialmente y valió cada kilómetro. La masa madre se nota, es otra categoría. Los postres también excelentes. Una experiencia completa.',
    fecha: 'Diciembre 2024',
  },
];

@Component({
  selector: 'app-resenas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css',
  imports: [ScrollRevealDirective],
})
export class ResenasComponent {
  protected readonly resenas = RESENAS;
  protected readonly starRange = [1, 2, 3, 4, 5] as const;
}
