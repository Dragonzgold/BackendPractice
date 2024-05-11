//Este archivo permite modificar dinamicamente lo .env para el ambiente de desarrollo
//En este archivo se encuentra recipilado la informacion del '.env', '.stag.env', '.prod.env'
//El cual esto se exporta a la clase app.Module dentro de src

export const enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};
