import { Injectable, NotFoundException } from '@nestjs/common';
import { categoriesEntities } from '../entities/categories.entities';
import { categoriDtos, updateCategoriDtos } from '../dtos/categori.dtos'

@Injectable()
export class CategoriesService {
  private counterID = 1;
  private categories: categoriesEntities[] = [{
    id: 1,
    nameCategori: 'Prueba',
    typeCategori: 'jas',
    numberCategori: 1
  }]

  findAll() {
    return this.categories
  }

  findOne(id: number) {
    const search = this.categories.find((item) => item.id == id);
    if (!search) {
      throw new NotFoundException(`No se encontro nada con el ID ${id}`);
    }
    return search
  }

  createCaregori(payload: categoriDtos) {
    this.counterID = this.counterID + 1;
    const newCategori = {
      id: this.counterID,
      ...payload
    }
    this.categories.push(newCategori);
    return newCategori;
  }

  updateCategori(id: number, payload: updateCategoriDtos) {
    const search = this.findOne(id)

    if (!search) {
      throw new NotFoundException(`No se encontro nada con el ID ${id}`);
    }
    const index = this.categories.findIndex((item) => item.id == id);
    this.categories[index] = {
      ...search,
      ...payload
    }
    return this.categories[index];
  }

  deleteCategori(id: number) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new NotFoundException(`No se encontro nada con el ID ${id}`);
    }
    this.categories.splice(index, 1);
    return `Se ha eliminado el ID ${id}`;
  }
}
