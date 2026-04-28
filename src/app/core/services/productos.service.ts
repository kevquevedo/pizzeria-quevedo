import { Injectable, inject, computed, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly firestore = inject(Firestore);

  readonly productos = toSignal(
    collectionData(
      collection(this.firestore, 'productos'),
      { idField: 'id' }
    ) as Observable<Producto[]>,
    { initialValue: [] as Producto[] }
  );

  porCategoria(categoriaId: string): Signal<Producto[]> {
    return computed(() =>
      this.productos().filter(p => p.categoriaId === categoriaId && p.disponible)
    );
  }
}
