import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SearchUserByCiDto {
    @ApiProperty({
        description: 'User CI (Carnet de Identidad)',
        example: 12345678,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    userCi: number;
}
export class SearchUserByEmailDto {
    @ApiProperty({
        description: 'User Email',
        example: 'example@example.com',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    userEmail: string;
}