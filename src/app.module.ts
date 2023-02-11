import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm'
import { UserModule } from './user/user.module';
import { User } from './user/user.entity'
import { LocationModule } from './location/location.module';
import { Location } from './location/location.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'clothesDB',
      entities: [__dirname + "/**/*.entity{.ts,.js}", User, Location],
      synchronize: true,
      autoLoadEntities: true
    }), UserModule, LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
