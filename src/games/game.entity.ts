import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sport: string;

  @Column({ default: 'Casual' })
  level: string;

  @Column({ nullable: true })
  scheduledAt: Date;

  @Column({ default: 10 })
  maxPlayers: number;

  @Column({ default: 0 })
  players: number;

  @Column({ default: 0 })
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  venue: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'float', nullable: true })
  lat: number;

  @Column({ type: 'float', nullable: true })
  lng: number;

  @ManyToOne(() => User, { nullable: true })
  creator: User;

  @CreateDateColumn()
  createdAt: Date;
}
