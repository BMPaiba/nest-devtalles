import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto  {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    offset?: number;
    @IsPositive()
    @IsNumber()
    @IsOptional()
    @Min(1)
    limit?: number;
}