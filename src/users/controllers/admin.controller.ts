import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
//Para ver la documentacion. Dirigirse al users.controller.js
import { ApiTags } from '@nestjs/swagger'
import { AdminService } from '../service/admin.service';
import { createAdminDtos, updateDtosAdmin } from '../dtos/admin.dtos';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

//Para ver la documentacion. Dirigirse al users.controller.js
@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private admin: AdminService) { }

  @Get()
  adminAll() {
    return this.admin.findAll()
  }

  @Get(':id')
  getOneAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.admin.findOne(id)
  }

  @Post()
  postAdmin(@Body() payload: createAdminDtos) {
    return this.admin.createAdmin(payload)
  }

  @Put(':id')
  putAdmin(@Param('id', ParseIntPipe) id: number, @Body() payload: updateDtosAdmin) {
    return this.admin.putAdmin(id, payload)
  }

  @Delete(':id')
  deleteAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.admin.deleteAdmin(id)
  }
}
