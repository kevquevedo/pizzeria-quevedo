import { inject, Injectable, computed, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly firestore = inject(Firestore);

  readonly productos = toSignal(
    new Observable<Producto[]>(subscriber => {
      return onSnapshot(
        collection(this.firestore, 'productos'),
        snapshot => subscriber.next(
          snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Producto))
        ),
        error => subscriber.error(error)
      );
    }),
    { initialValue: [] as Producto[] }
  );

  porCategoria(categoriaId: string): Signal<Producto[]> {
    return computed(() =>
      this.productos().filter(p => p.categoriaId === categoriaId && p.disponible)
    );
  }
}
