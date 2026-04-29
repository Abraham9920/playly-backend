import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(@InjectRepository(Game) private repo: Repository<Game>) {}

  findAll() { return this.repo.find({ order: { createdAt: 'DESC' } }); }

  findOne(id: number) { return this.repo.findOne({ where: { id } }); }

  create(data: Partial<Game>) { return this.repo.save(this.repo.create(data)); }

  async join(id: number) {
    const game = await this.findOne(id);
    if (!game || game.players >= game.maxPlayers) throw new Error('Cannot join');
    game.players += 1;
    return this.repo.save(game);
  }
}
