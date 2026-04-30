import { Producto } from './producto.model';

export interface CarritoItem {
  readonly producto: Producto;
  cantidad: number;
}
