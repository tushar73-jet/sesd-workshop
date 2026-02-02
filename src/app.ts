import express from "express";
import { ProductRepository } from "./repository";
import { ProductService } from "./service";
import { ProductController } from "./controller";

const app = express();
app.use(express.json());


const repo = new ProductRepository();
const service = new ProductService(repo);
const controller = new ProductController(service);


app.get("/products", controller.getAll);
app.get("/products/:id", controller.getOne);
app.post("/products", controller.create);
app.put("/products/:id", controller.update);
app.delete("/products/:id", controller.delete);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
