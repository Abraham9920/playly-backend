import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { JwtService } from '@nestjs/jwt';

@Controller('games')
export class GamesController {
  constructor(
    private svc: GamesService,
    private jwt: JwtService,
  ) {}

  private getUserId(auth: string) {
    if (!auth) throw new UnauthorizedException();
    const token = auth.replace('Bearer ', '').trim();
    const payload: any = this.jwt.decode(token);
    console.log('JWT payload:', JSON.stringify(payload));
    if (!payload || !payload.sub) throw new UnauthorizedException();
    return payload.sub;
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(id);
  }

  @Post()
  create(@Body() body: any, @Headers('authorization') auth: string) {
    return this.svc.create(body, this.getUserId(auth));
  }

  @Post(':id/join')
  join(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.svc.join(id, this.getUserId(auth));
  }
}
