import { Module } from '@nestjs/common';
//Para usar el config module se debe primero instalar con el npm i @nestjs/config
//Se importa como esta abajo en el import y se colocaria en el apartado de imports del modulo
//Ya con eso se podria usar perfectamente. Para seguir viendo como se usa, vaya a users.service.ts
import { ConfigModule } from '@nestjs/config'
//Para usar axios en los modules debemos de descargar las dependencias de
//@nestjs/axios axios
//Una vez descargadas debemos de importar los httpModule y httpService
//Una vez importados colocamos el httpmodule en las importaciones del module abajo.
//Para posteriormente en providers escribir el provider que usara y el UseFactory
//No olvidar que es de manera asyncrona y se usa el async


//Buena practica de programacion. Las dependencia de terceros van primero
//Y luego van las de nosotros

//Una importacion que se saca del npm i joi
import * as Joi from 'joi';


import { HttpModule, HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'
import { UserModule } from './users/users.module'
import { AppController } from './app.controller'
import { DatabaseModule } from './database/database.module';

//Importacion que se obtiene de enviorements. Que seria el centro de ambiente con el .env
//Esto nos permite modificar dinamicamente el ambiente de desarrollo en la linea 27
import { enviroments } from './enviorements';

//Se debe de importar nuevamente el config.js
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      //Se crea una nueva seccion llamada load. La cual permite cargar los datos que se
      //encuentran dentro del config.js. Ya con eso los datos que se encuentra alli
      //Nos permite realizar las verificaciones de los tipados
      load: [config],
      isGlobal: true,
      //Esto es una validacion que recibe un objeto
      //Aqui definimos que tipo devariables pediremos al ambiente de desarrollo
      //Aqui se especifica y se dice que tipo y si son requeridos o no
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
      })
    }),
    HttpModule,
    ProductsModule,
    UserModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(request);
        return tasks.data;
      },
      inject: [HttpService]
    }
  ],
})
export class AppModule { }
