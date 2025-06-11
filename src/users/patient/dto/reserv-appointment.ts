import {IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ReservAppointmentDto {
    @ApiProperty({
        description: 'The ci of the patient',
        example: '123456789'
    })
    @IsNotEmpty()
    @IsNumber()
    patientCi: string;
    @ApiProperty({
        description: 'The ci of the doctor',
        example: '123456789'
    })
    @IsNotEmpty()
    @IsNumber()
    doctorCi: string;
    @ApiProperty({
        description: 'The specialty of the doctor',
        example: 'Cardiology'
    })
    @IsNotEmpty()
    @IsString()
    specialty: string;
    @ApiProperty({
        description: 'The date of the appointment',
        example: '2023-05-24'
    })
    @IsNotEmpty()
    @IsString()
    date: string;
    @ApiProperty({
        description: 'The name of the institution',
        example: 'Hospital Central'
    })
    @IsNotEmpty()
    @IsString()
    institutionName: string;
    @ApiProperty({
        description: 'Department of the appointment',
        example: 'Cochabamba'
    })
    @IsNotEmpty()
    @IsString()
    department: string;
    @ApiProperty({
        description: 'Shift of the appointment',
        example: 'Morning'
    })
    @IsNotEmpty()
    @IsString()
    shift: string;
    @ApiProperty({
        description: 'Start time of the appointment',
        example: '08:00'
    })
    @IsNotEmpty()
    @IsString()
    startTime: string;
}