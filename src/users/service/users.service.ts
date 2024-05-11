import { Injectable, NotFoundException } from '@nestjs/common';

//Segunda parte. Se importa el ConfigService de la libreria que se instalo
//Para posteriormente usarse como un constructor en la parte de abajo
//Y de alli llamarlo con this.ConfigService.get(''). Dentro de los parentesis
//Se coloca el nombre de una de las variables que esta dentro del archivo .env
import { ConfigService } from '@nestjs/config'
import { usersEntities } from '../entities/users.entities';
import { CreateDtosUsers, updateUsersDtos } from '../dtos/users.dtos';
import { ProductsService } from 'src/products/services/products.service';


@Injectable()
export class UsersService {

  constructor(
    private productService: ProductsService,
    private ConfigService: ConfigService,
  ) { }

  private counter = 0;
  private users: usersEntities[] = [];

  findAll() {
    const api_key = this.ConfigService.get('API_KEY');
    const db = this.ConfigService.get('DATABASE_NAME');
    console.log(api_key);
    console.log(db);
    return this.users
  }

  findOne(id: number) {
    const search = this.users.find((item) => item.id === id)
    if (!search) {
      throw new NotFoundException(`La persona que usted busca no se encuentra ${id}`)
    }
    return search;
  }

  updateUser(id: number, payload: updateUsersDtos) {
    const search = this.findOne(id);
    if (!search) {
      throw new NotFoundException(`No se pudo hacer el update, debido a que la persona no existe`);
    }
    const index = this.users.findIndex((item) => item.id === id);

    this.users[index] = {
      ...search,
      ...payload
    };
    return this.users[index]
  }

  createUser(payload: CreateDtosUsers) {
    this.counter = this.counter + 1
    const newUser = {
      id: this.counter,
      ...payload
    };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`No se encontro al usuario ${id}`)
    }
    this.users.splice(index, 1);
    return `Se elimino el usuario ${id}`
  }

  getOrdersBuyUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productService.findAll()
    }
  }

}
