import { Module } from '@nestjs/common';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])], // puedes omitir o agregar entidades si las usas
  controllers: [ConsultationController],
  providers: [ConsultationService],
})
export class ConsultationModule {}
