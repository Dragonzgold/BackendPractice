//Esto permite que, los desarrolladores no tengan fallos a la hora de hacer tipeado
//Lo que se necesita es importar dicha libreria y poner los datos que aparece abajo
//Los cuales hay que buscart en los archivos "".env". Entonces quedarian
//"process.env."Se introduce el nombre de lo que este en el archivpo .env""
//Luego todo esto se exportara al archivo app.service


import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        apiKey: process.env.API_KEY,
    };
});