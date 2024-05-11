import { usersEntities } from './users.entities';
import { Product } from 'src/products/entities/product.entity'

export class orderBuy {
  date: Date;
  user: usersEntities;
  products: Product[];
}
