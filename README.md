# 🌐 Route API- Música Brasileira Front-End

Interface web para exploração, busca e cadastro de músicas brasileiras. Este projeto consome a MusicAlive API e permite que usuários descubram artistas, álbuns e composições, além de contribuir com informações sobre novas músicas.

>  💡 Desenvolvido como parte de um projeto full-stack com foco em experiência do usuário, performance e boas práticas modernas de front-end.

---

## 📸 Imagens do Projeto

<div align="center">
  <img src="/public/musica3.png" width="350px" alt="Tela Catálogo de Músicas" />
  <br />
  <img src="/public/musica4.png" width="250px" alt="Tela Pesquisa" />
  <img src="/public/musica5.png" width="250px" alt="Sobre" />
</div>

---

## 📚 O que foi aprendido


- **Criação de landing pages dinâmicas** com Next.js e TypeScript
- **Consumo de APIs REST** com `fetch` e `useEffect`
- **Componentização e boas práticas** em React
- **Tailwind CSS avançado**: responsividade, dark mode, animações
- **Scroll suave** para navegação entre seções
- **Acessibilidade e SEO**

---

## 🛠️ Como executar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Desiree2522/front-api5.git
cd front-api5
```

2. **Instale as dependências:**

```bash
npm install


```

3. **Execute o projeto em ambiente de desenvolvimento:**

```bash
npm run dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000/)

---

## 🔗 Recursos Úteis

- 🔌 **API utilizada:** [Projeto---API - GitHub](https://github.com/Desiree2522/Projeto---API)

- 🔌 **API utilizada na Render:** [projeto-apiminip4](https://projeto-apiminip4.onrender.com)

---

## ✨ Funcionalidade - Lista de Músicas

O componente **`ListaMusicas`** é responsável por listar, buscar e filtrar músicas brasileiras consumindo diferentes rotas da API.

---

### ✅ O que ele faz

- Exibe todas as músicas cadastradas ao carregar a página.
- Permite buscar músicas por **artista, banda, músico ou álbum** através de filtros dinâmicos.
- Mostra um **loading animado** durante a busca.
- Exibe mensagens amigáveis de erro ou de “nenhum resultado encontrado”.
- Permite **limpar filtros** com apenas um clique.
- Usa animações, ícones e efeitos visuais para melhorar a experiência do usuário.

---

### ⚙️ Tecnologias e recursos utilizados

- **React Hooks** (`useState`, `useEffect`) para controle de estados e ciclo de vida do componente.
- **Fetch assíncrono** para requisição dos dados da API.
- **Tailwind CSS** e **CSS Modules** para estilização responsiva e customizada.
- **Componentização** e separação clara da lógica de busca e exibição.
- **Acessibilidade e usabilidade**, incluindo navegação por teclado.

---

### 📌 Fluxo de uso

1. Ao abrir a página, todas as músicas disponíveis são carregadas automaticamente.
2. O usuário seleciona o filtro desejado no menu suspenso (Por Artista, Banda, Músico, Álbum ou Todas).
3. Digita o termo de busca e pressiona **Enter** ou clica em **Buscar**.
4. O sistema consulta a API e exibe os resultados na grade de músicas.
5. Caso nenhum resultado seja encontrado, uma mensagem de feedback é mostrada.
6. O botão **Limpar** remove filtros e recarrega todas as músicas cadastradas.

---

## 🏷️ Tópicos

- `front-end`
- `nextjs`
- `música-brasileira`

---

## 🙋🏾‍♂️ Sobre

A Música Brasileira representa uma das expressões culturais mais ricas do mundo, reunindo ritmos, histórias e tradições que atravessam gerações. Ter uma plataforma organizada e acessível para reunir essas informações contribui não apenas para a preservação da memória musical, mas também para facilitar a educação e a pesquisa cultural. Este projeto fortalece o vínculo entre estudantes, educadores e o vasto patrimônio musical do país, estimulando o interesse por nossa identidade artística.

> "O front-end foi desenvolvido com foco em leveza, clareza e acessibilidade, refletindo a riqueza, a diversidade e a importância cultural da música brasileira."