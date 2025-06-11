import {IsNotEmpty, IsNumber, IsString, IsDateString,IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
export class CreateDoctorDto {
    @ApiProperty({
        description: 'The ci of the doctor',
        example: '1829432'
    })
    @IsNotEmpty()
    @IsNumber()
    doctorCi: number;
    @ApiPropertyOptional({
        description: 'Años de experiencia del doctor',
        example: 5
    })
    @IsOptional()
    @IsNumber()
    yearsOfExperience?: number;
    @ApiPropertyOptional({
        description: 'Especialidad del doctor',
        example: 'Cardiologo',
        default: 'Medicina General'
    })
    @IsOptional()
    @IsString()
    specialty?: string;
}