import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateLivescoreDto } from './dto/create-livescore.dto';
import { UpdateLivescoreDto } from './dto/update-livescore.dto';
import { map } from 'rxjs';

@Injectable()
export class LivescoresService {
  public api_key: string = this.configService.get<string>('API');
  public url: string = this.configService.get<string>('URL');

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}

  create(createLivescoreDto: CreateLivescoreDto) {
    return 'This action adds a new livescore';
  }

  findAll(): any {
    console.log(
      `${this.url}livescores?api_token=${this.api_key}&include=localTeam,visitorTeam,league,lineup`,
    );

    return this.http
      .get(
        `${this.url}livescores?api_token=${this.api_key}&include=localTeam,visitorTeam,league,lineup`,
      )
      .pipe(
        map((response) => response.data),
        map((data) => data),
      );
  }

  findOne(id: number) {
    return `This action returns a #${id} livescore`;
  }

  update(id: number, updateLivescoreDto: UpdateLivescoreDto) {
    return `This action updates a #${id} livescore`;
  }

  remove(id: number) {
    return `This action removes a #${id} livescore`;
  }
}
function lastValueFrom(arg0: any): any {
  throw new Error('Function not implemented.');
}
