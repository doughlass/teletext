import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { CreateFixtureDto } from './dto/create-fixture.dto';
import { UpdateFixtureDto } from './dto/update-fixture.dto';

@Injectable()
export class FixturesService {
  public api_key: string = this.configService.get<string>('API');
  public url: string = this.configService.get<string>('URL');
  private attributes: string = `bench,localTeam,visitorTeam,league,lineup,league.country,goals,cards,stats,substitutions,venue`;

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}
  create(createFixtureDto: CreateFixtureDto) {
    return 'This action adds a new fixture';
  }

  findAll() {
    return `This returns all`;
  }

  findOne(date: string) {
    const endpoint: string = `${this.url}fixtures/date/${date}?api_token=${this.api_key}&include=${this.attributes}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  findOneByDate(date: string) {
    const endpoint: string = `${this.url}fixtures/date/${date}/league?api_token=${this.api_key}&include=${this.attributes}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  findOneByDateAndLeague(date: string, league: string) {
    const endpoint: string = `${this.url}fixtures/date/${date}/?api_token=${this.api_key}&leagues=${league}&include=${this.attributes}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  update(id: number, updateFixtureDto: UpdateFixtureDto) {
    return `This action updates a #${id} fixture`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixture`;
  }
}
