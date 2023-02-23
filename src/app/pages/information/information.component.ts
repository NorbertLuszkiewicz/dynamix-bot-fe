import { Component } from '@angular/core';
import { CommendList } from '../../models/interfaces';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent {
  private defaultCommendList = [
    {
      name: '!dynamix',
      description: "Sprawdzająca połączenie z botem, powinna zwrócić 'Bot Works!'",
    },
    {
      name: '!slots',
      description: 'Losuje 3 emotki, szansa na wygranie 2%, cooldown 3 min na osobę',
    },
    {
      name: '!pogoda [miasto]',
      description: 'Zwraca informacje dotyczące temperatury, zachmurzenia oraz prędkości wiatru',
    },
    {
      name: '!wordle [słowo]',
      description: "Gra polegająca na odgadnięciu 5 literowego słowa (użycie '!wordle' zdradza więcej szczegółów)",
    },
    {
      name: '!on [komenda]/ !off [komenda]',
      description: 'Wyłącza/włącza daną komendę/grupę komend na kanale (tft, chess, pogoda, wordle, slots, song)',
    },
    {
      name: 'piramidka [emotka]',
      description: 'Tworzy piramidkę 4 stopnia z podanej emotki',
    },
    {
      description:
        'Ustawienie Nagrody kanału, która automatyczne wykona !slots, można ustawić, że za przegraną osoba dostanie t/o',
    },
  ];

  private spotifyAndSECommendList = [
    {
      name: '!song',
      description:
        'Zwraca nazwę, autora oraz link do piosenki ( zwróci utwór z Spotify albo Stream Elements w zależności, z której strony otwarzany jest w tym momencie utwór)',
    },
    {
      name: '!playlist/!playlista',
      description: 'Wyświetla playlistę spotify, którą aktualnie odtwarza streamer',
    },
    {
      name: 'volume [0-100]',
      description: 'Zmienia głośność na spotify. Tylko dla moderatorów',
    },
    {
      name: '!next',
      description: 'Pomija piosenkę na spotify/SR. Tylko dla moderatorów',
    },
    {
      description: 'Automatycznie usuwa z kolejki piosenki, które są niedostępne w Polsce albo zostały zablokowane',
    },
    {
      description:
        'Możliwość ustawienia nagrody kanału, która automatyczne dodają piosenkę za pkt kanału do kolejki StreamElements (zatrzymuje Spotify po zakupieniu nagrody i wraca do piosenki po zakończeniu listy SR)',
    },
    {
      description: 'Możliwość ustawienia nagrody kanału, która automatyczne pomija piosenkę z SR/Spotify',
    },
    {
      description:
        'Możliwość stworzenia nagrody kanału, która automatyczne podgłaśnia Spotify i SR do wybranej głosności na wybrany czas',
    },
  ];

  private riotCommendList = [
    {
      name: '!ranking [server]',
      description: 'Zwraca top 10 serwera tft, bez podania [server] zwraca dla serwera EUW',
    },
    {
      name: '!mecze [nickname], [server]',
      description:
        'Zwraca ostatnie 10 gier tft z dzisiaj użytkownika, bez podania [server] wybiera EUW, bez podania [nickname] wybiera streamera np. !mecze dynam1x, euw',
    },
    {
      name: '!mecz [nr], [nickname], [server]',
      description:
        'Zwraca dokładny stan boardu użytkownika, bez podania [server] wybiera EUW, bez podania [nickname] wybiera nick streamera np. !mecz 1, dynam1x, euw',
    },
    {
      name: '!staty [nickname], [server]',
      description:
        'Komenda zwraca statystyki użytkownika w tft, bez podania [server] wybiera EUW, bez podania [nickname] zwraca nick streamera np. !staty dynam1x, euw',
    },
  ];

  private chessCommendList = [
    {
      name: '!chessuser [nickname]/ !szachista [nickname]',
      description: 'Zwraca statystyki użytkownika na chess.com',
    },
    {
      name: '!chesslast [nickname]',
      description: 'Zwraca link do ostatniej gry na chess.com',
    },
  ];

  private additionalInformationList = [
    {
      name: '!chessuser [nickname]/ !szachista [nickname]',
      description: 'Bot musi być moderatorem czatu, aby działał poprawnie',
    },
    {
      name: '!chesslast [nickname]',
      description:
        'Aby bot działał poprawnie z nagrodami za punkty kanału, nagrody te muszą mieć możliwość wpisania tekstu',
    },
  ];

  getCommandsList(): CommendList[] {
    return [
      { title: 'Domyślne komendy', list: this.defaultCommendList },
      {
        title: 'Integracja z Spotify i StreamElements',
        list: this.spotifyAndSECommendList,
      },
      {
        title: 'Komendy po połączeniu z Riot Games',
        list: this.riotCommendList,
      },
      { title: 'Komendy z Chess.com', list: this.chessCommendList },
      { title: 'Dodatkowe Informacje', list: this.additionalInformationList },
    ];
  }

  identify(i): number {
    return i;
  }

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  getLoginRedirectData(): void {
    const name = this.route.snapshot.queryParams['name'];
    const token = this.route.snapshot.queryParams['token'];

    if (name && token) {
      console.log('logFn', this.route.snapshot.queryParams);
      this.authService.setUserNameAndToken(name, token);
    }
  }

  ngOnInit(): void {
    this.getLoginRedirectData();
  }
}
