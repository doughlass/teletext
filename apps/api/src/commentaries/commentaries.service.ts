import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';

@Injectable()
export class CommentariesService {
  public api_key: string = this.configService.get<string>('API');
  public url: string = this.configService.get<string>('URL');
  private attributes: string = `goalscorers.player,goalscorers.team`;

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}

  create(createCommentaryDto: CreateCommentaryDto) {
    return 'This action adds a new commentary';
  }

  findAll() {
    return `This action returns all commentaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentary`;
  }

  findOneById(id: number) {
    const endpoint: string = `${this.url}commentaries/fixture/${id}?api_token=${this.api_key}`;
    console.log(endpoint);

    return this.http.get(endpoint).pipe(
      map((response) => response.data),
      map((data) => data),
    );
  }

  update(id: number, updateCommentaryDto: UpdateCommentaryDto) {
    return `This action updates a #${id} commentary`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentary`;
  }
}
