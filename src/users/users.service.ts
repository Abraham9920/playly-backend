import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
  async create(email: string, password: string, name: string) {
    const passwordHash = await bcrypt.hash(password, 10);
    return prisma.user.create({ 
      data: { email, passwordHash, name } 
    });
  }
  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.passwordHash || '');
    return valid ? user : null;
  }
}
