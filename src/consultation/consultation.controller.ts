import { Body, Controller, Post } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';

@Controller('consultations')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post('crear-consulta')
  async create(@Body() dto: CreateConsultationDto) {
    return this.consultationService.registrarConsulta(dto);
  }
}
