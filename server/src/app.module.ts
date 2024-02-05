import { Module } from '@nestjs/common';
import {
  AuthGuard,
  AuthModule,
} from '@tmw-universe/tmw-universe-nestjs-auth-utils';
import { getEnv } from './utils/config/get-env';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    AuthModule.register({
      authHost: getEnv().auth.host,
      configRetryDelay: getEnv().auth.configRetryDelay,
      domain: getEnv().domain,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60,
      },
    ]),
    DatabaseModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },

    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
