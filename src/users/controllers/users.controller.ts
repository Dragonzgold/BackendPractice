import { Controller, Get, Put, Param, Body, Post, Delete } from '@nestjs/common';

//Esta importacion es la que nos permite separar los modulos en se swagger
//La importacion que nos permite esto es la 'ApiTags'. La cual como dije
//permite separarlas con un nombre que nosotrsos le queramos poner
//Y el 'ApiOperation', nos permite poner un breve comentario en los modulos internos
//De los service que aparecen dentro del swagger
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { UsersService } from '../service/users.service'
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateDtosUsers, updateUsersDtos } from '../dtos/users.dtos'

//Justamente acá esta el nombre por el cual se separaria en el swagger
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private user: UsersService) { }

  @Get()
  //Aqui es donde se introduciria el berve comentario usando su decorador
  @ApiOperation({ summary: 'Obtencion de todos los usuarios' })
  GetUsers() {
    return this.user.findAll()
  }

  @Get(':usersId')
  getUsersOne(@Param('usersId', ParseIntPipe) id: number) {
    return this.user.findOne(id)
  }

  @Get(":id/orders")
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.user.getOrdersBuyUser(id);
  }

  @Put(':id')
  putUsers(@Param('id', ParseIntPipe) id: number, @Body() payload: updateUsersDtos) {
    return this.user.updateUser(id, payload)
  }

  @Post()
  postUsers(@Body() payload: CreateDtosUsers) {
    return this.user.createUser(payload);
  }

  @Delete(':id')
  deleteUsers(@Param(`id`, ParseIntPipe) id: number) {
    return this.user.delete(id)
  }
}
