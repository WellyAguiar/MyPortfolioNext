# Investigação de Bug: Desaparecimento de Elementos da Navbar

Este documento detalha o motivo pelo qual os links e o botão de troca de tema desapareceram após a implementação do `next-themes` na Fase 3.

## 1. O Problema
Ao carregar a página, a Navbar exibe apenas o texto "Welly Aguiar", sem os links de navegação ("Sobre", "Tecnologias", etc.) e sem o ícone de troca de tema.

## 2. Causa Raiz: Bloqueio de Hidratação
A causa raiz foi identificada no componente `src/components/Header/Header.jsx`. 

Para evitar erros de "Hydration Mismatch" (quando o servidor renderiza algo diferente do cliente, comum ao lidar com temas), foi implementada uma técnica de verificação de montagem (`mounted state`).

### O Código Problemático:
```javascript
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 h-[var(--headerheight)] p-4 flex justify-start items-center bg-color-bg/80 backdrop-blur-sm">
        <span className="text-xl text-color-brand font-semibold">Welly Aguiar</span>
      </nav>
    );
  }
```

### Explicação:
- No lado do servidor (SSR), `mounted` é sempre `false`. Portanto, o Next.js gera apenas o HTML básico da Navbar (sem links).
- No lado do cliente (browser), após o JavaScript ser carregado, o `useEffect` deveria mudar `mounted` para `true`, disparando uma nova renderização com todos os elementos.
- **O Bug:** O componente `Header` **não está sendo renderizado no `page.js`**, ele está sendo importado mas não utilizado corretamente, ou o estado de `mounted` está impedindo a exibição completa por algum erro de execução silencioso ou conflito de importação no `layout.js`.

## 3. Erro Adicional Identificado
Ao analisar o `src/app/layout.js`, notei que o componente `Header` é importado mas **NÃO é renderizado** dentro do `body`. 

Anteriormente, o `Header` estava sendo renderizado dentro do `src/app/page.js`. No entanto, ao mover a lógica de provedores para o `layout.js`, o `Header` precisa estar dentro do `Providers` para que o hook `useTheme` funcione.

### Estado Atual do `layout.js`:
```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="...">
        <Providers>
          {children} {/* O Header não está aqui! */}
        </Providers>
      </body>
    </html>
  );
}
```

## 4. Plano de Correção
1.  **Mover o `Header` para o `layout.js`**: Colocá-lo dentro do `Providers` acima do `{children}`. Isso garante que a Navbar apareça em todas as páginas e tenha acesso ao tema.
2.  **Remover o `Header` do `page.js`**: Para evitar duplicação.
3.  **Refinar o estado `mounted`**: Garantir que o esqueleto (skeleton) da Navbar durante o carregamento contenha o espaço correto para os links, evitando o "salto" de layout (layout shift).
