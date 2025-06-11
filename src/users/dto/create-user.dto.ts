import {IsNumber,IsEmail, IsNotEmpty, IsString,IsDateString } from 'class-validator';
import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({
        description: 'User CI (Carnet de Identidad)',
        example: 12345678,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
    @ApiProperty({
        description: 'User Email',
        example: 'example@example.com',
        type: String
    })
    @IsEmail()
    @IsNotEmpty()
    userEmail: string;
    @ApiProperty({
        description: 'User Name',
        example: 'John',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    userName: string;
    @ApiProperty({
        description: 'User Password',
        example: 'password123',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    userPassword: string;
    @ApiPropertyOptional({
        description: 'User Phone',
        example: '+591 77291234',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    userPhone: string;
    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'John',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Doe',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @ApiProperty({
        description: 'Fecha de nacimiento del usuario',
        example: '1990-01-01',
        type: Date
    })
    @IsDateString()
    @IsNotEmpty()
    birthDate: Date;
    @ApiProperty({
        description: 'Tipo de sangre del usuario',
        example: 'A+',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    bloodType: string;
    @ApiProperty({
        description: 'Dirección del usuario',
        example: '123 Main St, Apt 4B',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    departament: string;
    @ApiProperty({
        description: 'Ciudad del usuario',
        example: 'La Paz',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    province: string;
    @ApiProperty({
        description: 'Calle del usuario',
        example: 'Av. Siempre Viva 742',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    street: string;
}