import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Index' })
export class Index {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'compteur_id' })
  compteurId: string;

  @Column()
  value: string;

  @Column({ name: 'period_id' })
  periodId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
