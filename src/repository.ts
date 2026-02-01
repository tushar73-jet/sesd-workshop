import { Product } from "./model";

export class ProductRepository {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: number, name: string, price: number): Product | undefined {
    const product = this.findById(id);
    if (!product) return undefined;

    product.name = name;
    product.price = price;
    return product;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}
