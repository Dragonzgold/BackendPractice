import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { CreateProductsDtos, UpdateProductsDtos } from 'src/products/dtos/products.dtos';


@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'LOREM IPSUN',
    price: 25,
    stock: 1,
    img: '',
  }];

  findAll() {
    return this.products
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id)
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductsDtos) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductsDtos) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload
      };
      return this.products[index];
    }
    return null
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} Not Found`)
    } else {
      this.products.splice(index, 1)
      return `Se elimino el producto ${id}`;
    }
  }
}
