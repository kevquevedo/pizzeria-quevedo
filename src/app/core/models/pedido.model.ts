export interface PedidoItem {
  readonly nombre:   string;
  readonly precio:   number;
  readonly cantidad: number;
  readonly subtotal: number;
}

export interface NuevoPedido {
  readonly items:  PedidoItem[];
  readonly total:  number;
  readonly estado: string;
}
