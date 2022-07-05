// 实体
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number; //标记为主列 值自动生成
  @Column({ length: 50, default: '' })
  title: string; //
  @Column({ length: 20, default: 'zyd' })
  author: string; //
  @Column({ default: '' })
  thumb_url: string; //
  @Column('tinyint')
  type: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
