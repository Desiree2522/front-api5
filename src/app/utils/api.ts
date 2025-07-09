import { Musica } from "@/app/types/musica.types";

const API_BASE = 'https://projeto-apiminip4.onrender.com';


export async function fetchMusicas(): Promise<Musica[]> {
    const res = await fetch(`${API_BASE}`);
    if (!res.ok) {
        throw new Error('Erro ao buscar músicas');
        console.log ('Erro ao buscar músicas');
    }
    const result: Musica[] = await res.json();

    return result;
}

export type MusicaResponse = Musica[]; // Adjust this type as needed

export async function fetchBuscaMusica(nome: string): Promise<MusicaResponse> {
    const res = await fetch(`${API_BASE}/musica/busca?nome=${nome}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar música com nome ${nome}`);
    }
    const result: MusicaResponse = await res.json();

    return result;
}

 export async function fetchMusicaPorId(id: string): Promise<Musica> {
    const res = await fetch(`${API_BASE}/musica/${id}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar música com ID ${id}`);
    }
    const result: Musica = await res.json();

    return result;
}

export async function fetchMusicasPorBanda(banda: string): Promise<Musica[]> {
    const res = await fetch(`${API_BASE}/musica/banda/${banda}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar músicas da banda ${banda}`);
    }
    const result: Musica[] = await res.json();

    return result;
}

export async function fetchMusicasPorArtista(artista: string): Promise<Musica[]> {
    const res = await fetch(`${API_BASE}/musica/artista/${artista}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar músicas do artista ${artista}`);
    }
    const result: Musica[] = await res.json();

    return result;
}

export async function fetchMusicasPorMusico(musico: string): Promise<Musica[]> {
    const res = await fetch(`${API_BASE}/musica/musico/${musico}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar músicas do músico ${musico}`);
    }
    const result: Musica[] = await res.json();

    return result;
}

export async function fetchMusicasPorAlbum(album: string): Promise<Musica[]> {
    const res = await fetch(`${API_BASE}/musica/album/${album}`);
    if (!res.ok) {
        throw new Error(`Erro ao buscar músicas do álbum ${album}`);
    }
    const result: Musica[] = await res.json();

    return result;
}
