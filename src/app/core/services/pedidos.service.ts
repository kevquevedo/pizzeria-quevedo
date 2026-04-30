import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { CarritoItem } from '../models/carrito-item.model';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private readonly firestore = inject(Firestore);

  async crear(items: CarritoItem[], total: number): Promise<string> {
    const docRef = await addDoc(collection(this.firestore, 'pedidos'), {
      items: items.map(i => ({
        nombre:   i.producto.nombre,
        precio:   i.producto.precio,
        cantidad: i.cantidad,
        subtotal: i.producto.precio * i.cantidad,
      })),
      total,
      estado: 'pendiente',
      fechaCreacion: serverTimestamp(),
    });
    return docRef.id;
  }
}
