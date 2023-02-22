import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm'
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { ClothModule } from './cloth/cloth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'clothesDB',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true
    }), UserModule, LocationModule, ClothModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
