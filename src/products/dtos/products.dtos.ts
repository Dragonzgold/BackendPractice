import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive
}
  from 'class-validator';

//Aqui lo importamos para poder utilizarlo
//import { PartialType } from '@nestjs/mapped-types'

//El cambio esta explicado en users.dtos.js
import { PartialType, ApiProperty } from '@nestjs/swagger'

// Al usar esta tecnica se busca miniizar los errores cuando se este desarrollando
// Evitar probelmas de tipado
export class CreateProductsDtos {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly img: string;
}


// Esta es una dependencia que se debe de importar con "@nestjs/mapped-types"
// Esto lo que nos permite es hacer una extension de lo que hayamos creado
//Y permitir modificarlos si asi lo deseamos
export class UpdateProductsDtos extends PartialType(CreateProductsDtos) { }
