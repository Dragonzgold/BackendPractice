import { Module } from '@nestjs/common'
import { ProductsController } from './controllers/products.controller'
import { BrandsController } from './controllers/brands.controller'
import { CategoriesController } from './controllers/categories.controller'
import { ProductsService } from './services/products.service'
import { brandService } from './services/brand.service'
import { CategoriesService } from './services/categories.service'

@Module({
  imports: [],
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductsService, brandService, CategoriesService],
  exports: [ProductsService],
})

export class ProductsModule { }
