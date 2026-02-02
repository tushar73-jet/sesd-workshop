import { Product } from "./model";
import { ProductRepository } from "./repository";

export class ProductService {
  constructor(private repo: ProductRepository) {}

  getAllProducts() {
    return this.repo.findAll();
  }

  getProductById(id: number) {
    return this.repo.findById(id);
  }

  createProduct(name: string, price: number) {
    if (!name || price <= 0) {
      throw new Error("Invalid product data");
    }

    const product = new Product(Date.now(), name, price);
    return this.repo.create(product);
  }

  updateProduct(id: number, name: string, price: number) {
    if (!name || price <= 0) {
      throw new Error("Invalid product data");
    }

    return this.repo.update(id, name, price);
  }

  deleteProduct(id: number) {
    return this.repo.delete(id);
  }
}
