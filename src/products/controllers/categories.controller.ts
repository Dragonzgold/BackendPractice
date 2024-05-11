import { Controller, Get, Param, Put, Post, Delete, Body } from '@nestjs/common';
//Para ver la documentacion. Dirigirse al users.controller.js
import { ApiTags } from '@nestjs/swagger'
import { CategoriesService } from '../services/categories.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { categoriDtos, updateCategoriDtos } from '../dtos/categori.dtos'

//Para ver la documentacion. Dirigirse al users.controller.js
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categories: CategoriesService) { }

  @Get()
  getCategoryes() {
    return this.categories.findAll();
  }

  @Get(':id')
  getCategoriesId(@Param('id', ParseIntPipe) id: number) {
    return this.categories.findOne(id);
  }

  @Post()
  createCategories(@Body() payload: categoriDtos) {
    return this.categories.createCaregori(payload);
  }


  @Put(':id')
  updateCategories(@Param('id', ParseIntPipe) id: number, @Body() payload: updateCategoriDtos) {
    return this.categories.updateCategori(id, payload)
  }


  @Delete(':id')
  deleteCategories(@Param('id', ParseIntPipe) id: number) {
    return this.categories.deleteCategori(id)
  }

}
