import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { StoredProcedureModule } from './database/storedprocedure/storedprocedure.module';
import { UsersModule } from './users/users.module';
import { HealthInstitucionModule } from './health-institucion/health-institucion.module';
import { AuthModule } from './auth/auth.module';
import config from './config/configuration';

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: process.env.NODE_ENV !== 'production' ? 'development.env' : undefined,
    ignoreEnvFile: process.env.NODE_ENV === 'production',
    load: [config]
  }),
  TypeOrmModule.forRootAsync({
    useFactory: async() => ({
      type: config().database.type,
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.database,
      entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
      synchronize: true
    })
  }),StoredProcedureModule, UsersModule, HealthInstitucionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ResponseInterceptor
    }
  ],
})
export class AppModule {}
