import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('games')
  getGames() {
    return [
      {
        id: '1',
        title: 'Padel Match – 4 Players',
        sport: 'PADEL',
        skillLevel: 'INTERMEDIATE',
        venue: 'Chelsea Racket Club',
        neighborhood: 'Chelsea',
        startsAt: new Date(Date.now() + 3600000 * 5),
        duration: 90,
        maxPlayers: 4,
        joinedPlayers: 2,
        pricePerPlayer: 18,
        status: 'OPEN',
      },
      {
        id: '2',
        title: '5v5 Soccer Game',
        sport: 'SOCCER',
        skillLevel: 'BEGINNER',
        venue: "Randall's Island",
        neighborhood: "Randall's Island",
        startsAt: new Date(Date.now() + 3600000 * 24),
        duration: 60,
        maxPlayers: 10,
        joinedPlayers: 7,
        pricePerPlayer: 12,
        status: 'OPEN',
      },
      {
        id: '3',
        title: 'Sunrise Yoga Flow',
        sport: 'YOGA',
        skillLevel: 'ALL_LEVELS',
        venue: 'Brooklyn Bridge Park',
        neighborhood: 'DUMBO',
        startsAt: new Date(Date.now() + 3600000 * 36),
        duration: 60,
        maxPlayers: 20,
        joinedPlayers: 14,
        pricePerPlayer: 10,
        status: 'OPEN',
      },
    ];
  }
}
