import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

//Aqui llega el archivo que se encuentra en config.ts
//Se exporta sin los "{}". Deebido a que es un archivo que se exporta por default
//Una vez exportada so debera cambiar el import de "@nestjs/config". El cual pasara a llamarse ConfigType
//Haciendo que lo de abajo cambie
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private task: any[],
    //Aqui antes habia algo pero ya no me acuerdo que es lo que era.
    //Para usar el nuevo config se debera de injectar y entre parentesis poner el KEY que hemos
    //estado trabajando. para posteriormente ingresar los nuevos datos
    //Los caules seranmediante relaciones privadas.
    //Se nombra una variable para psoteriormente aplicar el ConfigType que importamos anteriormente
    //Para poder evitar problemas con el tipado. para consiguiente introducir el typeof
    //El cual debera llevar la variable que importamos desde config.ts
    //OJO. La variable nueva no puede tener el mismo nombre que la variable que viene con el config.ts
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) { }
  getHello(): string {
    //En este aparado se introduciria los nuevos datos que trajimos desde el config
    //Si todo sale bien, despues del this. se colocara lo que trajimos del config.js
    //Y si todo funciona bien nos dara acceso a todo lo que se encuentra dentro de esa carpeta y
    //Documento, accediendo a sus propiedades
    //Aunque aun hay un ajuste que se debe de realizar en la carpeta app.module. Vamos para alla
    const apiKey = this.configService.apiKey;
    const nameDB = this.configService.database.name;
    return `Hello world ${apiKey} ${nameDB}`;
  }
}
