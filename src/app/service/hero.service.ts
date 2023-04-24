import { Injectable } from '@angular/core';
import { Hero } from '../compoments/hero-detail/hero';
import { list } from '../compoments/heroes/heroList';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id:number):Observable<Hero>{
    const hero = list.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes'; 

  constructor(private messageService: MessageService,  private http: HttpClient) { }
}
