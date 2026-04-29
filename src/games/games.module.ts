import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { GamesService } from "./games.service";
import { GamesController } from "./games.controller";

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET || "playly-secret" })],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
