import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, query, where, updateDoc } from '@angular/fire/firestore';
import { Producto } from '../models/producto.model';

type NuevoProducto = Omit<Producto, 'id'>;

const IMAGEN_MUZZARELLA =
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop';

const PRODUCTOS_NUEVOS: NuevoProducto[] = [
  {
    nombre: 'Pizza Napolitana',
    descripcion: 'Tomate San Marzano, mozzarella fior di latte, albahaca fresca y aceite de oliva extra virgen.',
    precio: 1800,
    categoriaId: 'pizzas',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
  },
  {
    nombre: 'Pizza Calabresa',
    descripcion: 'Salame piccante, mozzarella, aceitunas negras y pimiento asado sobre base de tomate artesanal.',
    precio: 1950,
    categoriaId: 'pizzas',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
  },
  {
    nombre: 'Empanada de Carne',
    descripcion: 'Carne vacuna picada a cuchillo con cebolla, pimiento y aceitunas. Horneada en horno de barro.',
    precio: 450,
    categoriaId: 'empanadas',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1629385701021-ffd3f3e6f76c?w=400&h=300&fit=crop',
  },
  {
    nombre: 'Coca-Cola 500ml',
    descripcion: 'Lata de Coca-Cola 500ml bien fría.',
    precio: 800,
    categoriaId: 'bebidas',
    disponible: true,
    imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
  },
];

@Injectable({ providedIn: 'root' })
export class SeedService {
  private readonly firestore = inject(Firestore);

  async run(): Promise<void> {
    await this.updateMuzzarella();
    await this.addProductosFaltantes();
  }

  private async updateMuzzarella(): Promise<void> {
    const snap = await getDocs(
      query(collection(this.firestore, 'productos'), where('nombre', '==', 'Muzzarella'))
    );
    console.log(snap.docs[0].data())
    if (snap.empty) return;
    await updateDoc(snap.docs[0].ref, { imagen: IMAGEN_MUZZARELLA });
  }

  private async addProductosFaltantes(): Promise<void> {
    const col = collection(this.firestore, 'productos');
    for (const producto of PRODUCTOS_NUEVOS) {
      const existe = await getDocs(
        query(col, where('nombre', '==', producto.nombre))
      );
      if (existe.empty) {
        await addDoc(col, producto);
      }
    }
  }
}
