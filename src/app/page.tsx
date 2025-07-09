// Ajuste o caminho abaixo para o arquivo correto que exporta ListaMusicas.
// Por exemplo, se o arquivo se chama 'ListaMusicas.tsx' dentro da pasta 'inicio':

// Ajuste o caminho abaixo para o arquivo correto que exporta ListaMusicas.
// Exemplo: se o arquivo está em 'src/app/components/ListaMusicas.tsx':

"use client";
import ListaMusicas from "@/components/ListaMusica/ListaMusicas";
import { motion } from "framer-motion";
import { MusicalNoteIcon, UserGroupIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import "@/app/styles/globals.css"; // Importando estilos globais
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-blue-100 p-4 font-sans">
      {/* Menu de navegação */}
      <nav className="flex justify-center gap-8 mb-8">
        <a href="#inicio" className="flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors">
          <MusicalNoteIcon className="w-5 h-5" /> Início
        </a>
        <a href="#musicas" className="flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors">
          <UserGroupIcon className="w-5 h-5" /> Músicas
        </a>
        <a href="#sobre" className="flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors">
          <InformationCircleIcon className="w-5 h-5" /> Sobre
        </a>
      </nav>

      {/* Seção Início */}
      <motion.section
        id="inicio"
        className="max-w-2xl mx-auto mb-8 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 flex flex-col items-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Corrija o componente de imagem */}
        <Image
          src="/musica1.png"
          alt="Música"
          width={500} // Defina ambos width e height
          height={500}
  // Ou use style para manter a proporção
  style={{ width: '100%', height: 'auto' }}
    />

        <h1 className="text-4xl font-extrabold text-purple-800 mb-2 flex items-center gap-2">
          <MusicalNoteIcon className="w-8 h-8 text-purple-400" />
          Catálogo de Músicas
        </h1>
        <p className="text-purple-600 text-lg text-center">
          Explore músicas por banda, artista, músico ou álbum.<br />
          Dados dinâmicos consumidos de uma API REST.
        </p>
      </motion.section>

      {/* Seção Músicas */}
      <motion.section
        id="musicas"
        className="max-w-2xl mx-auto mb-8 bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ListaMusicas />
      </motion.section>

      {/* Seção Sobre */}
      <motion.section
        id="sobre"
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-purple-700 mb-2 flex items-center justify-center gap-2">
          <InformationCircleIcon className="w-6 h-6 text-purple-400" />
          Sobre
        </h2>
        <p className="text-purple-600 mb-4">
          Projeto desenvolvido como Mini P4 utilizando Next.js, React, TypeScript e TailwindCSS.<br />
          🎵 A Importância da Música Brasileira

A música brasileira é um dos maiores patrimônios culturais do nosso país. Ela reflete a diversidade do nosso povo, mistura ritmos e histórias, e fortalece a nossa identidade. Do samba ao forró, da bossa nova ao sertanejo, cada estilo carrega tradição, criatividade e emoção, conectando gerações e aproximando pessoas.

Pensando nisso, o nosso projeto nasceu com o objetivo de valorizar e divulgar a riqueza musical do Brasil. Por meio de atividades educativas, apresentações e oficinas, buscamos incentivar o conhecimento, a apreciação e o respeito pela cultura brasileira, mostrando como a música transforma vidas e une comunidades.


        </p>

          <Image
          src="/musica2.jpg"
          alt="Música"
          width={500} // Defina ambos width e height
          height={500}
  // Ou use style para manter a proporção
  style={{ width: '100%', height: 'auto' }}
    />
        <footer className="text-purple-300 mt-6">
          <small>
            Projeto Mini P4 &copy; {new Date().getFullYear()} | Powered by Next.js
          </small>
        </footer>
      </motion.section>
    </main>
  );
}