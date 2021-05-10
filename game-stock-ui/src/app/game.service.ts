import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor() {}

  getGames() {
    return {
      "Indoor Game1": [
        { title: "Empire", desc: "create your empire", link: "games/mafia.html" },
        { title: "Empire1", desc: "create your empire", link: "games/mafia.html" },
        { title: "Empire2", desc: "create your empire", link: "games/mafia.html" },
        { title: "Empire3", desc: "create your empire", link: "games/mafia.html" },
      ],
      "Indoor Game2": [
        { title: "Mafia", desc: "kill or be killed", link: "games/mafia.html" },
        { title: "Mafia1", desc: "kill or be killed", link: "games/mafia.html" },
        { title: "Mafia2", desc: "kill or be killed", link: "games/mafia.html" },
        { title: "Mafia3", desc: "kill or be killed", link: "games/mafia.html" },
      ],
      "Outdoor Game1": [
        { title: "cricket", desc: "hit ball with bat", link: "games/mafia.html" },
        { title: "cricket1", desc: "hit ball with bat", link: "games/mafia.html" },
        { title: "cricket2", desc: "hit ball with bat", link: "games/mafia.html" },
        { title: "cricket3", desc: "hit ball with bat" , link: "games/mafia.html"},
      ],
      "Outdoor Game2": [
        { title: "volleyball", desc: "hit ball with body parts", link: "games/mafia.html" },
        { title: "volleyball1", desc: "hit ball with body parts", link: "games/mafia.html" },
        { title: "volleyball2", desc: "hit ball with body parts", link: "games/mafia.html" },
        { title: "volleyball3", desc: "hit ball with body parts" , link: "games/mafia.html"},
      ],
      "Co-Founder Special": [
        { title: "Deep", desc: "Khao aur jano", link: "games/mafia.html" },
        { title: "Deep1", desc: "Khao aur jano" , link: "games/mafia.html"},
        { title: "Deep2", desc: "Khao aur jano" , link: "games/mafia.html"},
        { title: "Deep3", desc: "Khao aur jano" , link: "games/mafia.html"},
      ],
    };
  }
}
