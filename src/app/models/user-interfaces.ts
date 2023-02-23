import { ServerName } from './enums';
import { Slot, VolumeSong, RiotAccount } from './interfaces';

export interface ActiveRiotAccount {
  date?: number;
  id?: string;
  isLol?: boolean;
  name?: string;
  puuid?: string;
  server?: ServerName;
}

export interface commandSwitch {
  chess?: boolean;
  slots?: boolean;
  song?: boolean;
  tft?: boolean;
  weather?: boolean;
  wordle?: boolean;
}

export interface User {
  activeRiotAccount?: ActiveRiotAccount;
  addSongID?: string;
  banID?: string;
  clientSongRequestID?: string;
  clientSongRequestSecret?: string;
  code?: string;
  commandSwitch?: commandSwitch;
  commentAfterSubs?: string;
  device?: string;
  endTime?: number;
  matchList?: string[];
  riotAccountList?: RiotAccount[];
  rollID?: string;
  skipSongID?: string;
  slotsID?: Slot[];
  spotifyAccessToken?: string;
  spotifyRefreshToken?: string;
  streamer?: string;
  twitchAccessToken?: string;
  twitchRefreshToken?: string;
  twitchToken?: string;
  volumeSongID?: VolumeSong;
}
