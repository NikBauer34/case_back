import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
  }),
  MongooseModule.forRoot(`mongodb+srv://nikbauer09:9a10ur1Z@cluster0.tzmlj0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),//h
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
