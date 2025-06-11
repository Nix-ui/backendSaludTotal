import {IsNotEmpty, IsOptional, IsString, IsNumber, IsNumberString } from "class-validator";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
export class UpdateUserDto {
    @ApiProperty({
        description: 'User CI (Carnet de Identidad)',
        example: 12345678,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
    @ApiPropertyOptional({
        description: 'User Phone number',
        example: '+591 77291234',
    })
    @IsNumberString()
    @IsOptional()
    phone?: string;
    @ApiPropertyOptional({
        description: 'User name',
        example: 'John'
    })
    @IsString()
    @IsOptional()
    userName?: string;
}