import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class GamesService {
  findAll() {
    return prisma.game.findMany({
      include: {
        host: { select: { id: true, name: true } },
        venue: {
          select: {
            id: true,
            name: true,
            neighborhood: true,
            lat: true,
            lng: true,
          },
        },
      },
      orderBy: { startsAt: 'asc' },
    });
  }
  findOne(id: string) {
    return prisma.game.findUnique({ where: { id } });
  }
  create(data: any, hostId: string) {
    console.log('hostId from token:', hostId);
    return prisma.game.create({
      data: {
        title: data.title,
        sport: data.sport,
        skillLevel: data.level || data.skillLevel || 'Casual',
        startsAt: data.scheduledAt ? new Date(data.scheduledAt) : new Date(),
        duration: data.duration || 60,
        maxPlayers: data.maxPlayers || 10,
        pricePerPlayer: data.price || 0,
        hostId: hostId,
      },
    });
  }

  async join(id: string, userId: string) {
  try {
    const game = await prisma.game.findUnique({
      where: { id },
      include: { bookings: true },
    });
    if (!game) throw new Error('Game not found');
    return await prisma.booking.create({
      data: { gameId: id, userId, amountPaid: game.pricePerPlayer },
    });
  } catch (e: any) {
    console.error('Join error:', e.message);
    throw e;
  }
}
