import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class SearchSpecialtyBy {
    @IsString()
    @IsNotEmpty()
    specialtyName: string;

    @IsNumber()
    @IsNotEmpty()
    specialtyId: number;
}
export class SearchSpecialtyByName {
    @ApiProperty({
        description: 'The name of the specialty',
        example: 'Cardiology'
    })
    @IsString()
    @IsNotEmpty()
    specialtyName: string;
}
export class SearchSpecialtyById {
    @ApiProperty({
        description: 'The id of the specialty',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    specialtyId: number;
}