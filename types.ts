export type TokenResponse = {
  code: number;
  msg: string;
  token: string;
};

export type TaskResponse = {
  code: number;
  msg: string;
};

export type ArchiveLink = {
  title: string;
  url: string;
  info: string;
  date: string;
};

export type Person = {
  imie: string;
  nazwisko: string;
  wiek: number;
  o_mnie: string;
  ulubiona_postac_z_kapitana_bomby: string;
  ulubiony_serial: string;
  ulubiony_film: string;
  ulubiony_kolor: string;
};
