import { Injectable, NotFoundException } from '@nestjs/common';
import { entitiesBrand } from '../entities/brands.entities'
import { createDtosBrand, updateDtosBrands } from '../dtos/brands.dtos'

@Injectable()
export class brandService {
  private counterID = 0;
  private brands: entitiesBrand[] = [];

  findAll() {
    return this.brands
  }

  findOne(id: number) {
    const search = this.brands.find((item) => item.id == id);
    return search
  }

  createBrand(payload: createDtosBrand) {
    this.counterID = this.counterID + 1
    const newBrand = {
      id: this.counterID,
      ...payload
    };
    this.brands.push(newBrand);
    return newBrand
  }

  updateBrand(id: number, payload: updateDtosBrands) {
    const search = this.findOne(id);
    if (!search) {
      throw new NotFoundException(`No se encontro nada por el ID ${id}`)
    }
    const index = this.brands.findIndex((item) => item.id == id)

    this.brands[index] = {
      ...search,
      ...payload
    }
    return this.brands[index]
  }

  deleteBrand(id: number) {
    const index = this.brands.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new NotFoundException(`No se encontro nada para eliminar por el ID ${id}`)
    }
    this.brands.splice(index, 1)
    return `Se elimino la marca que usted mando a eliminar`
  }
}
