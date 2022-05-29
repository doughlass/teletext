import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { CreateStandingDto } from './dto/create-standing.dto';
import { UpdateStandingDto } from './dto/update-standing.dto';

@Injectable()
export class StandingsService {
  public api_key: string = this.configService.get<string>('API');
  public url: string = this.configService.get<string>('URL');
  private attributes: string = `team`;

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}
  create(createStandingDto: CreateStandingDto) {
    return 'This action adds a new standing';
  }

  findAll() {
    return `This action returns all standings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} standing`;
  }

  findOneByStandingId(id: number) {
    const endpoint: string = `${this.url}standings/season/${id}?api_token=${this.api_key}&include=${this.attributes}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  update(id: number, updateStandingDto: UpdateStandingDto) {
    return `This action updates a #${id} standing`;
  }

  remove(id: number) {
    return `This action removes a #${id} standing`;
  }
}
