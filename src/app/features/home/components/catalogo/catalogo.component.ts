import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CategoriasService } from '../../../../core/services/categorias.service';
import { ProductosService } from '../../../../core/services/productos.service';

@Component({
  selector: 'app-catalogo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent {
  private readonly categoriasService = inject(CategoriasService);
  private readonly productosService  = inject(ProductosService);

  protected readonly categorias = this.categoriasService.categorias;
  protected readonly productos  = this.productosService.productos;

  protected readonly categoriaSeleccionada = signal<string | null>(null);
  protected readonly animando              = signal(false);

  protected readonly skeletons = Array.from({ length: 8 });

  protected readonly cargando = computed(() =>
    this.categorias().length === 0 && this.productos().length === 0
  );

  protected readonly productosFiltrados = computed(() => {
    const catId = this.categoriaSeleccionada();
    const visibles = this.productos().filter(p => p.disponible !== false);
    return catId ? visibles.filter(p => p.categoriaId === catId) : visibles;
  });

  protected seleccionar(catId: string | null): void {
    if (catId === this.categoriaSeleccionada()) return;
    this.animando.set(true);
    setTimeout(() => {
      this.categoriaSeleccionada.set(catId);
      this.animando.set(false);
    }, 150);
  }

  protected tabClass(catId: string | null): string {
    const activo = catId === null
      ? this.categoriaSeleccionada() === null
      : this.categoriaSeleccionada() === catId;
    const base = 'px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-quevedo-red focus-visible:outline-offset-2';
    return activo
      ? `${base} bg-quevedo-red text-quevedo-text shadow-lg shadow-quevedo-red/20`
      : `${base} bg-quevedo-surface text-quevedo-muted hover:text-quevedo-text hover:bg-quevedo-surface-light`;
  }

  protected nombreCategoria(catId: string): string {
    return this.categorias().find(c => c.id === catId)?.nombre ?? '';
  }

  protected formatPrecio(precio: number): string {
    const n = Number(precio);
    return Number.isFinite(n) ? n.toLocaleString('es-AR') : '—';
  }
}
