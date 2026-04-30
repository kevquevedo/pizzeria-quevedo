import { computed, effect, Injectable, signal } from '@angular/core';
import { CarritoItem } from '../models/carrito-item.model';
import { Producto } from '../models/producto.model';

const STORAGE_KEY = 'quevedo_carrito';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private readonly _items = signal<CarritoItem[]>(this.readFromStorage());

  readonly items         = this._items.asReadonly();
  readonly cantidadTotal = computed(() => this._items().reduce((acc, i) => acc + i.cantidad, 0));
  readonly total         = computed(() =>
    this._items().reduce((acc, i) => acc + (Number(i.producto.precio) || 0) * i.cantidad, 0)
  );

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._items()));
      } catch {
        // localStorage puede no estar disponible (modo privado, etc.)
      }
    });
  }

  private readFromStorage(): CarritoItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CarritoItem[]) : [];
    } catch {
      return [];
    }
  }

  agregar(producto: Producto): void {
    this._items.update(items => {
      const idx = items.findIndex(i => i.producto.id === producto.id);
      if (idx >= 0) {
        return items.map((item, i) =>
          i === idx ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...items, { producto, cantidad: 1 }];
    });
  }

  quitar(producto: Producto): void {
    this._items.update(items => {
      const idx = items.findIndex(i => i.producto.id === producto.id);
      if (idx < 0) return items;
      if (items[idx].cantidad === 1) return items.filter((_, i) => i !== idx);
      return items.map((item, i) =>
        i === idx ? { ...item, cantidad: item.cantidad - 1 } : item
      );
    });
  }

  eliminar(producto: Producto): void {
    this._items.update(items => items.filter(i => i.producto.id !== producto.id));
  }

  limpiar(): void {
    this._items.set([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}
