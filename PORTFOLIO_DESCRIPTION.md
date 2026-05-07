# Calculadora de Rescisão CLT - Detalhamento Técnico para Portfólio

Este documento fornece uma visão técnica aprofundada do projeto **Calculadora de Rescisão CLT**, ideal para ser utilizado em cards de portfólio, descrições de GitHub ou apresentações técnicas.

---

## 🚀 Resumo do Projeto

A **Calculadora de Rescisão CLT** é uma aplicação web de alta performance projetada para simular cálculos trabalhistas complexos com precisão e clareza. O foco do projeto foi transformar as regras densas da CLT (Consolidação das Leis do Trabalho) em uma experiência de usuário fluida, moderna e educativa.

- **Status:** MVP Funcional
- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Vitest.

---

## 🛠️ Arquitetura e Engenharia de Software

O projeto foi construído seguindo princípios de **Clean Architecture** e **Feature-Sliced Design**, garantindo que a lógica de negócio fosse desacoplada da interface.

### 1. Engine de Cálculo (Core Domain)
A "alma" do projeto é um conjunto de funções puras em TypeScript que processam as regras trabalhistas:
- **Modularização:** Cada verba rescisória (Saldo de Salário, 13º Proporcional, Férias, Aviso Prévio) possui seu próprio módulo isolado.
- **Precisão Temporal:** Implementação de lógica para contagem de avos (1/12) baseada na regra de 15 dias, utilizando manipulação precisa de objetos `Date`.
- **Esconamento de Aviso Prévio:** Algoritmo que aplica a Lei 12.506/2011, calculando o acréscimo de 3 dias por ano trabalhado.

### 2. Interface do Usuário (UI/UX)
- **Glassmorphism & Dark Mode:** Design moderno utilizando as capacidades do Tailwind CSS 4, com efeitos de desfoque de fundo e gradientes refinados.
- **Feedback em Tempo Real:** Validações robustas que impedem erros de entrada (ex: data de desligamento anterior à admissão) antes mesmo do processamento.
- **Responsividade Total:** Interface adaptável para dispositivos móveis, garantindo que o trabalhador possa consultar seus direitos de qualquer lugar.

### 3. Qualidade e Testes
- **TDD (Test Driven Development):** Os cálculos críticos foram desenvolvidos utilizando Vitest, com cobertura para diversos cenários (demissão com/sem justa causa, pedidos de demissão em diferentes épocas do mês).
- **Tipagem Estrita:** Uso exaustivo de interfaces e tipos TypeScript para eliminar erros de "undefined" ou tipos incorretos em operações financeiras.

---

## ⚖️ Regras de Negócio Implementadas (CLT)

O sistema automatiza a lógica para:
- **Saldo de Salário:** Proporcional aos dias trabalhados no mês do desligamento.
- **13º Salário Proporcional:** Cálculo de avos considerando meses com mais de 15 dias trabalhados.
- **Férias Proporcionais + 1/3 Constitucional:** Baseado no período aquisitivo informado.
- **Aviso Prévio Indenizado:** Diferenciação entre aviso trabalhado, indenizado e as particularidades de cada motivo de rescisão.

---

## 💡 Desafios Superados

- **Tratamento de Datas:** Gerenciar fusos horários e cálculos de meses/anos em JavaScript/TypeScript é um desafio conhecido. A solução envolveu o uso de datas em UTC para garantir consistência entre diferentes navegadores.
- **Tradução Jurídica para Código:** Converter o texto da lei em algoritmos condicionais (`if/else`) que cobrissem exceções, como a perda de direitos em demissões por justa causa.

---

## 📈 Próximos Passos (Roadmap)

- Integração com cálculos de **FGTS (Multa de 40%)**.
- Descontos oficiais de **INSS e IRRF** baseados nas tabelas vigentes.
- Exportação do resumo em **PDF**.

---

**Link do Repositório:** `[Seu Link do GitHub Aqui]`
**Live Demo:** `[Seu Link de Deploy Aqui]`
