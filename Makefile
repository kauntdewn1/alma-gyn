# Makefile para Alma Gym - Projeto React/TypeScript com Vite

# Variáveis
NODE_MODULES = node_modules
DIST = dist
BUILD = build
PORT = 5173

# Comandos principais
.PHONY: help install dev build preview lint clean deploy setup

# Comando padrão
all: help

# Ajuda
help:
	@echo "Comandos disponíveis:"
	@echo "  install      - Instala as dependências do projeto"
	@echo "  dev          - Inicia o servidor de desenvolvimento"
	@echo "  build        - Constrói o projeto para produção"
	@echo "  preview      - Visualiza a build de produção localmente"
	@echo "  lint         - Executa o linter ESLint"
	@echo "  lint-fix     - Corrige automaticamente problemas do linter"
	@echo "  clean        - Remove arquivos de build e node_modules"
	@echo "  deploy       - Constrói e faz deploy para Firebase"
	@echo "  setup        - Configuração inicial do projeto"
	@echo "  test         - Executa testes (quando implementados)"
	@echo "  format       - Formata o código com Prettier (quando implementado)"
	@echo "  type-check   - Verifica tipos TypeScript"
	@echo "  check        - Executa lint + verificação de tipos"
	@echo "  dev-full     - Desenvolvimento com todas as verificações"
	@echo "  build-full   - Build com todas as verificações"
	@echo "  outdated     - Verifica dependências desatualizadas"
	@echo "  update       - Atualiza dependências"
	@echo "  update-no-tailwind - Atualiza dependências (excluindo Tailwind)"

# Instalação de dependências
install:
	@echo "Instalando dependências..."
	npm install

# Desenvolvimento
dev:
	@echo "Iniciando servidor de desenvolvimento na porta $(PORT)..."
	npm run dev

# Build de produção
build:
	@echo "Construindo projeto para produção..."
	npm run build

# Preview da build
preview:
	@echo "Iniciando preview da build de produção..."
	npm run preview

# Linting
lint:
	@echo "Executando linter..."
	npm run lint

# Linting com correção automática
lint-fix:
	@echo "Corrigindo problemas do linter automaticamente..."
	npm run lint -- --fix

# Limpeza
clean:
	@echo "Limpando arquivos de build..."
	rm -rf $(DIST)
	rm -rf $(BUILD)
	@echo "Limpando cache do npm..."
	npm cache clean --force

# Limpeza completa (inclui node_modules)
clean-all: clean
	@echo "Removendo node_modules..."
	rm -rf $(NODE_MODULES)
	@echo "Limpeza completa concluída!"

# Deploy
deploy: build
	@echo "Fazendo deploy para Firebase..."
	npm run deploy

# Setup inicial do projeto
setup: install
	@echo "Configuração inicial concluída!"
	@echo "Execute 'make dev' para iniciar o desenvolvimento"

# Testes (placeholder para quando implementar)
test:
	@echo "Executando testes..."
	@echo "Testes ainda não implementados"

# Formatação de código (placeholder para quando implementar Prettier)
format:
	@echo "Formatando código..."
	@echo "Prettier ainda não configurado"

# Verificação de dependências desatualizadas
outdated:
	@echo "Verificando dependências desatualizadas..."
	npm outdated

# Atualização de dependências
update:
	@echo "Atualizando dependências..."
	npm update

# Atualização de dependências (excluindo Tailwind)
update-no-tailwind:
	@echo "Atualizando dependências (excluindo Tailwind CSS)..."
	npm update @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint-plugin-react-hooks eslint-plugin-react-refresh globals lucide-react react react-dom typescript typescript-eslint
	@echo "Atualização concluída! Tailwind CSS mantido na versão atual."

# Verificação de segurança
audit:
	@echo "Verificando vulnerabilidades de segurança..."
	npm audit

# Correção de vulnerabilidades
audit-fix:
	@echo "Corrigindo vulnerabilidades automaticamente..."
	npm audit fix

# Build de desenvolvimento
build-dev:
	@echo "Construindo projeto para desenvolvimento..."
	npm run build -- --mode development

# Build de staging
build-staging:
	@echo "Construindo projeto para staging..."
	npm run build -- --mode staging

# Build de produção com análise
build-analyze:
	@echo "Construindo projeto com análise de bundle..."
	npm run build -- --mode production --analyze

# Servidor de desenvolvimento em modo específico
dev-staging:
	@echo "Iniciando servidor de desenvolvimento em modo staging..."
	npm run dev -- --mode staging

dev-prod:
	@echo "Iniciando servidor de desenvolvimento em modo produção..."
	npm run dev -- --mode production

# Comandos de desenvolvimento rápido
start: dev
serve: dev
run: dev

# Comandos de build rápido
prod: build
dist: build

# Verificação de tipos TypeScript
type-check:
	@echo "Verificando tipos TypeScript..."
	npx tsc --noEmit

# Verificação de linting e tipos
check: lint type-check
	@echo "Verificações concluídas!"

# Comando para desenvolvimento completo
dev-full: install lint type-check dev
	@echo "Desenvolvimento iniciado com todas as verificações!"

# Comando para build completo
build-full: install lint type-check build
	@echo "Build concluída com todas as verificações!"
