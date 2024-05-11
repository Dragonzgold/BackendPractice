import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator'
//import { PartialType } from '@nestjs/mapped-types'
//El cambio esta explicado en users.dtos.js
import { PartialType, ApiProperty } from '@nestjs/swagger'


export class createDtosBrand {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly company: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly rif: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly logo: string
}

export class updateDtosBrands extends PartialType(createDtosBrand) { }
