import { Module } from '@nestjs/common';
import { AdminController } from './controllers/admin.controller';
import { UsersController } from './controllers/users.controller';
import { AdminService } from './service/admin.service';
import { UsersService } from './service/users.service';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AdminController, UsersController],
  providers: [AdminService, UsersService],
})

export class UserModule { }
