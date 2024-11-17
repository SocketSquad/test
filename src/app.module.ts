import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ConversationsModule } from './conversations/conversations.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { MessagesModule } from './messages/messages.module';
import { MessageAttachmentsModule } from './message-attachments/message-attachments.module';
import { FriendsModule } from './friends/friends.module';
import { FriendsRequestsModule } from './friends-requests/friends-requests.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ConversationsModule,
    UsersModule,
    GroupsModule,
    MessagesModule,
    MessageAttachmentsModule,
    FriendsModule,
    FriendsRequestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
