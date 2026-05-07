# Recomendações de Melhoria: Portfólio Welly Aguiar

Com base na análise técnica, aqui estão as sugestões de mudanças para tornar o portfólio mais profissional, performático e fácil de manter.

## 1. Refatoração de Dados e Arquitetura
- **Centralização de Conteúdo:** Mover todos os arrays de dados (projetos, habilidades, links de redes sociais) para arquivos dentro de `src/data` (ex: `projects.js`, `stack.js`). Isso separa a lógica de apresentação dos dados.
- **Unificação do CSS:** Manter apenas um arquivo `globals.css` dentro de `src/app/` e configurar as variáveis de tema lá. Remover a pasta `src/styles/` para seguir o padrão do Next.js App Router.
- **Componentização:** Criar componentes menores e mais genéricos (ex: `ProjectCard`, `SectionTitle`) para evitar repetição de código CSS do Tailwind.

## 2. Experiência do Usuário (UX) e Interface (UI)
- **Implementação de `next-themes`:** Substituir a troca manual de classes por uma biblioteca robusta como `next-themes`. Isso garante:
    - Sincronização automática com a preferência do sistema operacional.
    - Persistência do tema escolhido pelo usuário.
    - Prevenção do "flash" de cor errada ao recarregar a página.
- **Ajustes de Layout:** Alterar `h-screen` para `min-h-screen` nas seções de Projetos e Stack para garantir que o conteúdo nunca seja cortado em telas menores.
- **Interatividade:** Adicionar estados de `hover` mais consistentes e talvez algumas animações suaves (ex: usando `framer-motion`) para dar mais vida ao site.

## 3. SEO, Performance e Acessibilidade
- **Otimização de Imagens:** Substituir todas as tags `<img>` pelo componente `Image` do `next/image`. Isso é crucial para a performance (LCP) e economia de dados.
- **Metadados Completos:** Atualizar o título e adicionar tags OpenGraph para que o link do portfólio apareça bonito ao ser compartilhado no LinkedIn ou WhatsApp.
- **Ajustes de Acessibilidade:**
    - Adicionar `aria-label` em botões de ícone.
    - Garantir contraste adequado em todas as variações de cores (especialmente no modo light).
- **Limpeza de Dependências:** Avaliar se todas as bibliotecas de ícones são necessárias. Recomendação: Manter apenas `lucide-react` ou `react-icons`.

## 4. Próximos Passos Sugeridos
1.  **Limpeza inicial:** Unificar CSS e corrigir erros de digitação (`mp-4`, `text-color-ext`).
2.  **Migração de dados:** Criar os arquivos em `src/data` e atualizar os componentes.
3.  **Refatoração de Tema:** Instalar e configurar `next-themes`.
4.  **Otimização de Mídia:** Aplicar o componente `Image` e configurar metadados.
5.  **Polimento Visual:** Revisar espaçamentos e adicionar transições.
