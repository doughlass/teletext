import { PartialType } from '@nestjs/mapped-types';
import { CreateLivescoreDto } from './create-livescore.dto';

export class UpdateLivescoreDto extends PartialType(CreateLivescoreDto) {}
