import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  private readonly firestore = inject(Firestore);

  readonly categorias = toSignal(
    collectionData(
      query(collection(this.firestore, 'categorias'), orderBy('orden')),
      { idField: 'id' }
    ) as Observable<Categoria[]>,
    { initialValue: [] as Categoria[] }
  );
}
