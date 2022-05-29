import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { CreateTopscorerDto } from './dto/create-topscorer.dto';
import { UpdateTopscorerDto } from './dto/update-topscorer.dto';

@Injectable()
export class TopscorersService {
  public api_key: string = this.configService.get<string>('API');
  public url: string = this.configService.get<string>('URL');
  private attributes: string = `goalscorers.player,goalscorers.team`;

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}

  create(createTopscorerDto: CreateTopscorerDto) {
    return 'This action adds a new topscorer';
  }

  findAll() {
    return `This action returns all topscorers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topscorer`;
  }

  findOneBySeasonId(id: number) {
    const endpoint: string = `${this.url}topscorers/season/${id}?api_token=${this.api_key}&include=${this.attributes}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  update(id: number, updateTopscorerDto: UpdateTopscorerDto) {
    return `This action updates a #${id} topscorer`;
  }

  remove(id: number) {
    return `This action removes a #${id} topscorer`;
  }
}
