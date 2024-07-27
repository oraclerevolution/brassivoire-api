import { Index } from 'src/index/entities/index.entity';
import { TypeCompteur } from 'src/type-compteur/entities/type-compteur.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Compteurs' })
export class Compteur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  area: string;

  @Column({ name: 'meter_code' })
  meterCode: string;

  @Column()
  name: string;

  @Column()
  section: string;

  @ManyToOne(() => TypeCompteur, (typeCompteur) => typeCompteur.id)
  @JoinColumn({ name: 'type_compteur_id' })
  typeCompteur: TypeCompteur;

  @Column({ name: 'sub_section' })
  subSection: string;

  @OneToMany(() => Index, (index) => index.id)
  indexes: Index[];

  @Column()
  favorite: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
