import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany({
      include: { host: { select: { id: true, name: true } }, venue: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.game.findUnique({
      where: { id },
      include: { host: { select: { id: true, name: true } }, venue: true, bookings: true },
    });
  }

  create(data: any, hostId: string) {
    return this.prisma.game.create({
      data: {
        title: data.title,
        sport: data.sport,
        skillLevel: data.level || data.skillLevel || 'Casual',
        startsAt: data.scheduledAt ? new Date(data.scheduledAt) : new Date(),
        duration: data.duration || 60,
        maxPlayers: data.maxPlayers || 10,
        pricePerPlayer: data.price || 0,
        hostId,
      },
    });
  }

  async join(  async join(  async join(  async join(  ase   async join(  async join(  async join(  async join(  aslud  async jongs:  async join(  async!game) t  async join(  async join(  async join(  async.bo  async jngth   async join(  async join(  async joiGa  async join(  async join(  async join(  async join(  ase   async join(  a: id, userId, amountPaid: game.pricePerPlayer },
    });
  }
}
