import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { DataSource, QueryFailedError } from 'typeorm';
import { CreateConsultationDto } from './dto/create-consultation.dto';

@Injectable()
export class ConsultationService {
  constructor(private dataSource: DataSource) {}

  async registrarConsulta(data: CreateConsultationDto): Promise<string> {
    const { appointmentId, timeStart, timeEnd, diagnostic, treatment } = data;

    try {
      await this.dataSource.query(
        `CALL registrar_consulta(?, ?, ?, ?, ?)`,
        [appointmentId, timeStart, timeEnd, diagnostic, treatment],
      );

      return 'Consulta registrada exitosamente';
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.driverError?.sqlMessage
      ) {
        throw new BadRequestException(error.driverError.sqlMessage);
      }

      throw new InternalServerErrorException('Error al registrar la consulta');
    }
  }
}
