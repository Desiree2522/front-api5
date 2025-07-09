"use client";

import { useEffect, useState } from "react";
import styles from "./ListaMusicas.module.css";
import {
  fetchMusicas,
  fetchBuscaMusica,
  fetchMusicasPorBanda,
  fetchMusicasPorArtista,
  fetchMusicasPorMusico,
  fetchMusicasPorAlbum
} from "@/app/utils/api";

type Musica = {
  id: number;
  banda: string;
  artista: string;
  musico: string;
  albuns: string[];
};

export default function ListaMusicas() {
  // Estados
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [tipoBusca, setTipoBusca] = useState<'todas' | 'artista' | 'album' | 'banda' | 'musico'>('todas');
  const [valorBusca, setValorBusca] = useState("");

  // Buscar todos os dados
  const fetchData = async () => {
    try {
      setLoading(true);
      setErro(null);

      const musicasData = await fetchMusicas();
      setMusicas(musicasData);
      
      if (musicasData.length === 0) {
        setErro("Nenhuma música encontrada");
      }

    } catch (error) {
      setErro("Não foi possível carregar as músicas");
    } finally {
      setLoading(false);
    }
  };

  // Buscar por filtro
  const buscarPorFiltro = async () => {
    if (!valorBusca.trim() && tipoBusca !== 'todas') return;
    
    try {
      setLoading(true);
      setErro(null);
      
      let musicasData: Musica[] = [];
      
      if (tipoBusca === 'todas') {
        musicasData = await fetchMusicas();
      } else {
        switch (tipoBusca) {
          case 'banda': 
            musicasData = await fetchMusicasPorBanda(valorBusca);
            break;
          case 'artista': 
            musicasData = await fetchMusicasPorArtista(valorBusca);
            break;
          case 'musico': 
            musicasData = await fetchMusicasPorMusico(valorBusca);
            break;
          case 'album': 
            musicasData = await fetchMusicasPorAlbum(valorBusca);
            break;
          default: 
            musicasData = await fetchBuscaMusica(valorBusca);
        }
      }
      
      setMusicas(musicasData);
      
      if (musicasData.length === 0) {
        const mensagem = tipoBusca === 'todas' 
          ? "Nenhuma música encontrada" 
          : `Nenhuma música encontrada para ${tipoBusca}: ${valorBusca}`;
        setErro(mensagem);
      }
      
    } catch (error) {
      setErro(`Não foi possível realizar a busca ${tipoBusca} : ${valorBusca}`);
    } finally {
      setLoading(false);
    }
  };

  // Limpar busca
  const limparBusca = () => {
    setValorBusca("");
    setTipoBusca("todas");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.musicTheme}>
      {/* Cabeçalho animado */}
      <div className={styles.stageHeader}>
        <h1 className={styles.title}>🎵 Catálogo Musical Completo</h1>
        <div className={styles.spotlight}></div>
      </div>

      {erro && (
        <div className={styles.musicError}>
          <div className={styles.emptyNote}>♪</div>
          {erro}
        </div>
      )}

      {/* Controles de busca */}
      <div className={styles.musicControls}>
        <div className={styles.searchGroup}>
          <select
            className={styles.musicSelect}
            value={tipoBusca}
            onChange={(e) => setTipoBusca(e.target.value as any)}
          >
            <option value="todas">Todas as Músicas</option>
            <option value="banda">Por Banda</option>
            <option value="artista">Por Artista</option>
            <option value="musico">Por Músico</option>
            <option value="album">Por Álbum</option>
          </select>

          <input
            className={styles.musicInput}
            placeholder={`Buscar por ${tipoBusca === 'todas' ? '...' : tipoBusca}`}
            value={valorBusca}
            onChange={(e) => setValorBusca(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && buscarPorFiltro()}
          />
          
          <button
            className={`${styles.musicButton} ${styles.playButton}`}
            onClick={buscarPorFiltro}
            disabled={loading || (!valorBusca.trim() && tipoBusca !== 'todas')}
          >
            {loading ? (
              <span className={styles.equalizer}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            ) : 'Buscar'}
          </button>
          
          {(valorBusca || tipoBusca !== 'todas') && (
            <button
              className={`${styles.musicButton} ${styles.stopButton}`}
              onClick={limparBusca}
              disabled={loading}
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {/* Loading animado */}
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.vinylRecord}></div>
        </div>
      )}

      {/* Seção de Conteúdo - Só mostra as músicas se não houver erro */}
      {!erro && (
        <main className={styles.mainContent}>
          {/* Seção de Músicas */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.emoji}>🎵</span> Músicas
            </h2>
            <div className={styles.musicGrid}>
              {musicas.length === 0 ? (
                <div className={styles.noResults}>
                  <div className={styles.emptyNote}>♪</div>
                  Nenhuma música encontrada
                </div>
              ) : (
                musicas.map((musica) => (
                  <div key={musica.id} className={styles.musicCard}>
                    <div className={styles.cardHeader}>
                      <h3>{musica.banda}</h3>
                      <div className={styles.genreTag}>MÚSICA</div>
                    </div>
                    <div className={styles.cardContent}>
                      <p className={styles.musicDetail}>
                        <span className={styles.detailIcon}>🎤</span> {musica.artista}
                      </p>
                      <p className={styles.musicDetail}>
                        <span className={styles.detailIcon}>🎸</span> {musica.musico}
                      </p>
                      <p className={styles.musicDetail}>
                        <span className={styles.detailIcon}>💿</span> 
                        {musica.albuns?.join(", ") || "Nenhum álbum informado"}
                      </p>
                    </div>
                    <div className={styles.musicNotes}>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.note} style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>
      )}

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Catálogo Musical - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}