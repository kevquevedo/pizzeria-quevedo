import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Horario {
  readonly dias:    string;
  readonly horas:   string;
  readonly cerrado: boolean;
}

const HORARIOS: Horario[] = [
  { dias: 'Martes — Jueves',  horas: '12:00 – 15:00  ·  20:00 – 00:00', cerrado: false },
  { dias: 'Viernes — Sábado', horas: '12:00 – 15:30  ·  20:00 – 01:00', cerrado: false },
  { dias: 'Domingo',          horas: '12:00 – 23:00',                    cerrado: false },
  { dias: 'Lunes',            horas: 'Cerrado',                          cerrado: true  },
];

@Component({
  selector: 'app-ubicacion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css',
  imports: [ScrollRevealDirective],
})
export class UbicacionComponent {
  protected readonly horarios = HORARIOS;
}
