import { Request, Response } from "express";
import { ProductService } from "./service";

export class ProductController {
  constructor(private service: ProductService) {}

  getAll = (req: Request, res: Response) => {
    res.json(this.service.getAllProducts());
  };

  getOne = (req: Request, res: Response) => {
    const product = this.service.getProductById(Number(req.params.id));
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  };

  create = (req: Request, res: Response) => {
    const { name, price } = req.body;
    const product = this.service.createProduct(name, price);
    res.status(201).json(product);
  };

  update = (req: Request, res: Response) => {
    const { name, price } = req.body;
    const product = this.service.updateProduct(
      Number(req.params.id),
      name,
      price
    );

    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  };

  delete = (req: Request, res: Response) => {
    const success = this.service.deleteProduct(Number(req.params.id));
    if (!success) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  };
}
