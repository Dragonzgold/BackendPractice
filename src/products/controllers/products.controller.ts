import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response, response } from 'express'

//Para ver la documentacion. Dirigirse al users.controller.js
import { ApiTags } from '@nestjs/swagger'
import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductsDtos, UpdateProductsDtos } from 'src/products/dtos/products.dtos';

//Para ver la documentacion. Dirigirse al users.controller.js
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  getProducts() {
    return this.productsService.findAll()
  }

  @Get(':productsId')
  getOne(@Param('productsId', ParseIntPipe) id: number) {
    // return {
    //   message: `El id del producto es ${id}`
    // }
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductsDtos) {
    // return {
    //   message: 'Prueba',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductsDtos) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(+id)
  }
}
