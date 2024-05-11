//Este modulo es el modulo Global. Para entender como funciona y hacer un modulo global

import { Module, Global } from '@nestjs/common';

const API_KEY = '123456789';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule { }
