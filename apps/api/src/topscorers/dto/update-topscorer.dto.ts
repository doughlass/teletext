import { PartialType } from '@nestjs/mapped-types';
import { CreateTopscorerDto } from './create-topscorer.dto';

export class UpdateTopscorerDto extends PartialType(CreateTopscorerDto) {}
