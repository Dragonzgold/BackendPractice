import { IsNumber, IsString, IsNotEmpty } from 'class-validator'
//import { PartialType } from '@nestjs/mapped-types'
//El cambio esta explicado en users.dtos.js
import { PartialType, ApiProperty } from '@nestjs/swagger'
export class categoriDtos {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nameCategori: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly typeCategori: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly numberCategori: number;
}

export class updateCategoriDtos extends PartialType(categoriDtos) { }
