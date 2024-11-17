import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('DATABASE_URL');
        if (!uri) {
          throw new Error('DATABASE_URL environment variable is not defined');
        }
        return {
          uri,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: 'Nexus',
          retryWrites: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}