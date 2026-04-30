import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { PedidosService } from '../../core/services/pedidos.service';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-carrito',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
  imports: [RouterLink],
})
export class CarritoComponent {
  protected readonly carrito    = inject(CarritoService);
  private  readonly pedidos     = inject(PedidosService);

  protected readonly procesando = signal(false);
  protected readonly pedidoId   = signal<string | null>(null);
  protected readonly error      = signal<string | null>(null);

  protected async finalizar(): Promise<void> {
    if (this.procesando() || this.carrito.items().length === 0) return;
    this.procesando.set(true);
    this.error.set(null);
    try {
      const id = await this.pedidos.crear(this.carrito.items(), this.carrito.total());
      this.carrito.limpiar();
      this.pedidoId.set(id);
    } catch {
      this.error.set('No se pudo procesar el pedido. Intentá de nuevo.');
    } finally {
      this.procesando.set(false);
    }
  }

  protected agregar(producto: Producto): void  { this.carrito.agregar(producto); }
  protected quitar(producto: Producto): void   { this.carrito.quitar(producto); }
  protected eliminar(producto: Producto): void { this.carrito.eliminar(producto); }

  protected formatPrecio(precio: number): string {
    const n = Number(precio);
    return Number.isFinite(n) ? n.toLocaleString('es-AR') : '—';
  }

  protected numeroPedido(id: string): string {
    return id.substring(0, 8).toUpperCase();
  }
}
