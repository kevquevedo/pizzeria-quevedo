export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoriaId: string;
  disponible: boolean;
  imagen: string;
}
