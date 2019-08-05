import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity()
class Review {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column('timestamp')
  submittedAt!: Date;

  @ManyToOne(type => User, user => user.fromReviews)
  from!: User;

  @ManyToOne(type => User, user => user.toReviews)
  to!: User;

  @Column('text')
  feedback!: string;
}

export default Review;
