import { Injectable, NotFoundException } from '@nestjs/common';
import { adminEntities } from '../entities/admin.entities';
import { createAdminDtos, updateDtosAdmin } from '../dtos/admin.dtos';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

@Injectable()
export class AdminService {
  private counter = 1;
  private admin: adminEntities[] = [{
    id: 1,
    name: "Jesus",
    lastName: "Ramirez",
    cargo: "Ing",
    email: "jsa"
  }
  ];

  findAll() {
    return this.admin;
  }

  findOne(id: number) {
    const search = this.admin.find((item) => item.id == id)
    if (!search) {
      throw new NotFoundException(`No se encontro ningun ID con #${id}`)
    }
    return search;
  }

  createAdmin(payload: createAdminDtos) {
    this.counter = this.counter + 1
    const newAdmin = {
      id: this.counter,
      ...payload
    }
    this.admin.push(newAdmin);
    return newAdmin
  }

  putAdmin(id: number, payload: updateDtosAdmin) {
    const search = this.findOne(id);
    if (!search) {
      throw new NotFoundException(`No se encontro ningun ID con #${id}`)
    }
    const index = this.admin.findIndex((item) => item.id == id);
    this.admin[index] = {
      ...search,
      ...payload
    }
    return `Se ha actualizado el ID #${id}`
  }

  deleteAdmin(id: number) {
    const index = this.admin.findIndex((item) => item.id == id)
    if (index === -1) {
      throw new NotFoundException(`No se encontro ningun ID con #${id}`)
    }
    this.admin.splice(index, 1)
    return `Se elimino el ID ${id}`
  }
}
