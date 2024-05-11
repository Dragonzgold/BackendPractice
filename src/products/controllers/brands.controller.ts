import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//Para ver la documentacion. Dirigirse al users.controller.js
import { ApiTags } from '@nestjs/swagger'
import { brandService } from '../services/brand.service'
import { createDtosBrand, updateDtosBrands } from '../dtos/brands.dtos'
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe'

//Para ver la documentacion. Dirigirse al users.controller.js
@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brands: brandService) { }

  @Get()
  getBrand() {
    return this.brands.findAll();
  }

  @Get(':id')
  getBrandsOne(@Param('id', ParseIntPipe) id: number) {
    return this.brands.findOne(id);
  }

  @Post()
  createBrands(@Body() payload: createDtosBrand) {
    return this.brands.createBrand(payload);
  }

  @Put(':id')
  updateBrands(@Param('id', ParseIntPipe) id: number, @Body() payload: updateDtosBrands) {
    return this.brands.updateBrand(id, payload)
  }

  @Delete(':id')
  deleteBrands(@Param('id', ParseIntPipe) id: number) {
    return this.brands.deleteBrand(id)
  }
}
