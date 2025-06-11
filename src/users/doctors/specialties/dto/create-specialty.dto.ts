import {IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateSpecialtyDto {
    @ApiProperty({
        description: 'The specialty of the doctor',
        example: 'Cardiologia'
    })
    @IsString()
    @IsNotEmpty()
    specialty: string;
}