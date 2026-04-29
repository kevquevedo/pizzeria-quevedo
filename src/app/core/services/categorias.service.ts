import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  private readonly firestore = inject(Firestore);

  readonly categorias = toSignal(
    new Observable<Categoria[]>(subscriber => {
      return onSnapshot(
        collection(this.firestore, 'categorias'),
        snapshot => subscriber.next(
          snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as Categoria))
            .sort((a, b) => (a.orden ?? 99) - (b.orden ?? 99))
        ),
        error => subscriber.error(error)
      );
    }),
    { initialValue: [] as Categoria[] }
  );
}
