import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GamesReponse} from "./games-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {}
  private _url: string = "http://localhost:8080/games";
  getGames() : Observable<GamesReponse> {
    return this.http.get<GamesReponse>(this._url);
  }
}
