import { IsString, IsNotEmpty } from 'class-validator'
//import { PartialType } from '@nestjs/swagger'
//El cambio esta explicado en users.dtos.js
import { PartialType, ApiProperty } from '@nestjs/swagger'

export class createAdminDtos {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly cargo: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string
}

export class updateDtosAdmin extends PartialType(createAdminDtos) { }
