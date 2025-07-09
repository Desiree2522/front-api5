 export interface Musica 
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}

export interface MusicaResponse {
  musicas: Musica[];
  total: number;
}

 export interface MusicasPorAlbum
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}

 export interface MusicaPorId
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}

export interface MusicaPorBanda
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}

export interface MusicaPorArtista
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}

export interface MusicaPorMusico
    {
  id: number,
  banda: string,
  artista: string,
  musico: string,
  albuns: string[]
}
// Utility type to avoid repetition for music-related interfaces
export type MusicaBase = Omit<Musica, 'id'>;

// Example: type for creating a new Musica (without id)
export interface CreateMusica extends MusicaBase {}

// Example: type for updating a Musica (partial fields, except id)
// Example: type for updating a Musica (partial fields, except id)
export interface UpdateMusica extends Partial<MusicaBase> {
    id: number;
}
// Example: type for fetching a Musica by ID
export interface FetchMusicaById {
    id: number;
}   
// Example: type for fetching Musicas by Banda
export interface FetchMusicasByBanda {
    banda: string;
}
// Example: type for fetching Musicas by Artista
export interface FetchMusicasByArtista {        
    artista: string;
}
// Example: type for fetching Musicas by Musico
export interface FetchMusicasByMusico {     
    musico: string;
}

// Example: type for searching Musicas by name
export interface SearchMusica {
    nome: string;
}

// Example: type for fetching all Musicas
export interface FetchAllMusicas {
   
}

// Example: type for fetching Musicas by letra
export interface FetchMusicasByLetra {
    letra: string;
}