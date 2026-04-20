# PRD — MK Agropecuária e Pet Shop (Site institucional)

## Problem Statement (original)
Criar uma página web limpa e organizada para a **Mk Agropecuária e Pet Shop** de Ponta Grossa, PR. Dados fornecidos:
- Nome: Mk Agropecuaria e Pet Shop Ponta Grossa
- Nota Google: 4,8 (80 avaliações)
- Endereço: R. Bento Ribeiro, 1177 - sala 2 - Nova Rússia, Ponta Grossa - PR, 84070-350
- Horário: Aberto · Fecha 19:00
- Telefone: (42) 99946-2309
- Serviços: compras na loja, retirada na loja, entrega
- Empresa que acolhe a comunidade LGBTQ+ e de empreendedoras
- Depoimentos: Camylla Rodrigues, Rubia Knapp, Isabela Dzulinski

## User Choices
- Tipo: multi-página (Home, Serviços, Produtos, Sobre, Contato)
- Estilo: moderno/clean com tons naturais (verde/terra)
- Funcionalidades extras: formulário de contato + WhatsApp FAB + vitrine informativa
- Avaliações: destacar selo 4,8 ★ do Google
- Serviços: banho e tosa, rações/produtos pet, produtos agropecuários, retirada/entrega

## User Personas
- **Tutor de pet** (principal): busca banho/tosa de confiança e produtos com bom preço.
- **Produtor rural** (secundário): precisa de insumos e produtos agropecuários próximos.
- **Novos moradores da região**: procurando no Google pet shop/agropecuária em Ponta Grossa.

## Arquitetura
- **Frontend**: React 19 + React Router + Tailwind + Shadcn + Sonner (toasts). Fontes: Bricolage Grotesque (headings) + Manrope (body). Paleta earthy (verde #2E4A35, accent #C37353, fundo #F7F4EB).
- **Backend**: FastAPI + Motor/MongoDB. Endpoints sob `/api`.
- **Integrações**: WhatsApp via `wa.me`, Google Maps embed. Sem LLMs/pagamentos.

## Core Requirements (static)
- Site em pt-BR.
- Selo 4,8 ★ visível em Home e Sobre.
- Botão WhatsApp flutuante em todas as páginas.
- Formulário de contato persistido em MongoDB.
- Respeitar identidade inclusiva (LGBTQ+ e empreendedoras).

## What's been implemented (2025-12-20)
- **Backend**:
  - `POST /api/contact` (name, phone, message obrigatórios; email/subject opcionais) → grava em `contact_messages`.
  - `GET /api/contact` lista mensagens (sem `_id`).
  - `GET /api/business-info` expõe dados da loja.
  - `GET/POST /api/status` mantidos.
- **Frontend**:
  - Layout com Navbar glass sticky, Footer, FAB WhatsApp com pulse.
  - Página Home: hero + highlights + prévia de serviços + seção sobre + grid de reviews + CTA/mapa.
  - Página Serviços: 4 serviços detalhados com CTA WhatsApp por serviço.
  - Página Produtos: catálogo 8 itens com filtros (Todos/Pet/Agro) e CTA WhatsApp por produto.
  - Página Sobre: história, 4 valores, 3 stats.
  - Página Contato: form completo (valida, envia ao backend, toast de sucesso) + cards de info + mapa.
- **Testes**: 9/9 pytest backend pass; validação E2E frontend 100%.

## Prioritized Backlog
### P0 (Done)
- Todas as páginas e form de contato.

### P1
- Catálogo real com fotos dos produtos da loja (trocar Unsplash por fotos próprias).
- Integração com Instagram/linkr.bio exibindo últimos posts.
- SEO: meta tags, Open Graph, schema.org LocalBusiness + AggregateRating.

### P2
- Painel admin simples para listar mensagens do form.
- Agendamento online de banho & tosa (calendário).
- E-mail transacional (Resend/SendGrid) avisando chegada de mensagens.
- Cupons/promoções e área "Clube MK" (fidelidade).

## Next Tasks
1. Coletar fotos reais da loja/equipe/produtos para substituir imagens de stock.
2. Adicionar SEO e schema de LocalBusiness.
3. Habilitar notificação por e-mail quando formulário for enviado.
