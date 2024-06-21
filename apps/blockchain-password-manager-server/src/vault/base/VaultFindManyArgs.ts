/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VaultWhereInput } from "./VaultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VaultOrderByInput } from "./VaultOrderByInput";

@ArgsType()
class VaultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VaultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VaultWhereInput, { nullable: true })
  @Type(() => VaultWhereInput)
  where?: VaultWhereInput;

  @ApiProperty({
    required: false,
    type: [VaultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VaultOrderByInput], { nullable: true })
  @Type(() => VaultOrderByInput)
  orderBy?: Array<VaultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VaultFindManyArgs as VaultFindManyArgs };