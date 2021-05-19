import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GamesReponse} from "./games-response";
import {Observable} from "rxjs";
import { Game } from "./model/game";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = "http://localhost:8080/games";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  getGames() : Observable<GamesReponse> {
    return this.http.get<GamesReponse>(this.baseUrl);
  }
  createGame(game:Game) {
    return this.http.post(this.baseUrl, game, this.httpOptions)
  }
}
