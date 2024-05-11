import { NestFactory } from '@nestjs/core';
//Se usa esta importacion para validar tods los tipos de pipe,
//y de igual modo validar los dtos que se hagan
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

//Se imporat esta nueva libreria que seria con npm i @nestjs/swagger
//Una vez listo, se copia de la documentacion de nestjs en el apartado de OpenAPI
//Una vez alli se le da click a la opcion introduccion y se baja
//Hasta encontrar lo que aparece abajo
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Esta es la linea para que funcione de manera global
  app.useGlobalPipes(new ValidationPipe({
    //Esto quitara o negara todo atributo que no esten definidas en el dto
    whitelist: true,
    //Con esto mandara un error a la hora de agregar un atributo que no es valido
    forbidNonWhitelisted: true
  }))

  //Esto es lo que se tuvo que copiar de la documentacion de nest
  const config = new DocumentBuilder()
    //Aqui se cambia el nombre al nombre que nosotros queramos que tenga la documentacion de la API
    .setTitle('API')
    //Aqui seria la descripción que va a tener nuestra documentacion de la API
    .setDescription('Practica de platzi')
    // Aqui la version de nuestra documentacion
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //Y justamnete aqui. En la primera parte, se debera de cambiar el 'api' por un 'docs'
  //Luego de que este apartado este listo. Nos iremos al nest-cli.json
  SwaggerModule.setup('docs', app, document);
  //Lo pongo aqui abajo para que no se olvide. Luego de hacer todo esto
  //Se debara ir a la carpeta que se dijo arriba. Y poner la siguiente linea de codigo allá
  //Dentro de las llasves de 'compilerOptions' '"plugins": ["@nestjs/swagger"]'
  //Obviamente sin las comillas simples. Despues de eso se debera de ir a cada
  //De los dtos de los modulos

  
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
