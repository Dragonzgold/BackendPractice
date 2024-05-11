import {
  IsString,
  IsNotEmpty
} from 'class-validator'
//Este import se debe de hacer para que todo funcione.
//import { PartialType } from '@nestjs/mapped-types'

//Pero si se va a trabajar con la documentacion del swagger se debera de cambiar a la sieguiente
import { PartialType, ApiProperty } from '@nestjs/swagger'

//Ambas hacen lo mismo. Pero si se va a trabajar con la documentacion del swagger. No se puede usar
//La primera opcion si no que la segunda

//Algo curioso. Para hacer que los dtos te salgan en el swagger. Se debera de importar tambien el
//'ApiProperty'. Asi que, ademas de permitirnos darnos mas informacion como una descripcion
//Nos muestra las propiedades de cada uno de los elementos de los dtos
//Hay una continuacion del swagger en los controllers de los modulos

export class CreateDtosUsers {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the name of the users' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'lastName of the users' })
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly correo: string;
}

export class updateUsersDtos extends PartialType(CreateDtosUsers) { }
