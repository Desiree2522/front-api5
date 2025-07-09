// Tipo principal de uma música
export interface Musica {
  id: number;
  banda: string;
  artista: string;
  musico: string;
  albuns: string[];
}

// Response com lista de músicas + total
export interface MusicaResponse {
  musicas: Musica[];
  total: number;
}

// As buscas por Album, Banda, Artista, Musico, ou ID retornam uma música.
// Evitamos duplicação usando alias.
export type MusicaPorId = Musica;
export type MusicasPorAlbum = Musica;
export type MusicaPorBanda = Musica;
export type MusicaPorArtista = Musica;
export type MusicaPorMusico = Musica;

// Tipo base para criação e atualização (sem id)
export type MusicaBase = Omit<Musica, 'id'>;




// Atualizar uma música (campos parciais + id obrigatório)
export interface UpdateMusica extends Partial<MusicaBase> {
  id: number;
}

// Buscar música por ID
export interface FetchMusicaById {
  id: number;
}

// Buscar músicas por banda
export interface FetchMusicasByBanda {
  banda: string;
}

// Buscar músicas por artista
export interface FetchMusicasByArtista {
  artista: string;
}

// Buscar músicas por músico
export interface FetchMusicasByMusico {
  musico: string;
}

// Buscar músicas por letra inicial
export interface FetchMusicasByLetra {
  letra: string;
}

// Buscar músicas por nome
export interface SearchMusica {
  nome: string;
}

// Buscar todas as músicas
export type FetchAllMusicas = object;
