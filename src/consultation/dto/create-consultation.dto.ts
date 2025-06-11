import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateConsultationDto {
  @IsInt()
  appointmentId: number;

  @IsDateString()
  timeStart: string; // formato ISO: "2025-05-30T08:00:00"

  @IsDateString()
  timeEnd: string;

  @IsString()
  diagnostic: string;

  @IsString()
  treatment: string;
}
