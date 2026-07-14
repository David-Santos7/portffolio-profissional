# Portfólio profissional — David Santos Souza

Portfólio de [David Santos Souza](https://davidss.com.br), desenvolvedor front-end, educador e profissional de suporte de TI. A aplicação apresenta trajetória, formação, projetos em destaque, laboratório de estudos e canais de contato em uma experiência responsiva com recursos de acessibilidade.

## Tecnologias

- React 18 e TypeScript com modo estrito;
- Vite 5;
- Tailwind CSS;
- Lucide React para ícones;
- Vitest e Testing Library;
- ESLint.

## Executando localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
git clone https://github.com/David-Santos7/portffolio-profissional.git
cd portffolio-profissional
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run lint` | Verifica os padrões de código |
| `npm run typecheck` | Valida a tipagem TypeScript |
| `npm run test` | Executa os testes automatizados |
| `npm run test:watch` | Executa testes em modo interativo |
| `npm run build` | Gera a versão otimizada de produção |
| `npm run preview` | Serve localmente o build de produção |
| `npm run check` | Executa lint, typecheck, testes e build |

## Estrutura principal

```text
src/
├── components/
│   ├── layout/     # Estrutura compartilhada da página
│   ├── sections/   # Seções do portfólio
│   └── ui/         # Componentes visuais reutilizáveis
├── data/           # Conteúdo profissional separado por domínio
├── hooks/          # Comportamentos compartilhados
├── pages/          # Composição da página
├── test/           # Configuração dos testes
└── types/          # Contratos TypeScript do domínio
public/             # Metadados públicos, robots e sitemap
```

Projetos, experiências, habilidades e configurações do site ficam em arquivos próprios dentro de `src/data`. Os contratos compartilhados estão em `src/types/portfolio.ts`, evitando duplicação sem acoplar o conteúdo à estrutura visual.

## Conteúdo e rotas

Os projetos são classificados nos dados como `featured` ou `study`. A interface apresenta entre quatro e seis projetos em destaque com informações de contexto disponíveis e mantém exercícios menores em cards compactos no Laboratório de estudos.

| Rota | Conteúdo |
| --- | --- |
| `/` | Portfólio e navegação por âncoras |
| `/privacidade` | Política de Privacidade do formulário de contato |
| Demais endereços | Página 404 sem indexação |

A hospedagem mantém uma reescrita específica para `/privacidade`. O arquivo público `404.html` atende endereços inexistentes sem transformar todas as rotas em respostas de sucesso da SPA.

## Qualidade e acessibilidade

A interface inclui navegação semântica, link para pular ao conteúdo, foco visível, suporte a redução de movimento, estados acessíveis no formulário, imagens com carregamento adiado e textos alternativos. Esses recursos não substituem uma auditoria formal de conformidade WCAG.

Metadados canônicos, Open Graph, Twitter Cards, imagem social 1200×630, ícones, dados estruturados, `robots.txt`, manifest e sitemap compõem a base de SEO técnico e compartilhamento social.

Antes de enviar uma alteração, execute:

```bash
npm run check
```

## Produção

Site oficial: [davidss.com.br](https://davidss.com.br)

O provedor de hospedagem existente é mantido. O diretório gerado para publicação é `dist/`.
