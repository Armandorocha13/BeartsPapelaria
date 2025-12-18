#!/bin/bash

echo "========================================"
echo "Instalador Simples - Google Cloud MCP"
echo "========================================"
echo ""

# Detectar sistema operacional
OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
  Linux*)
    OS_TYPE="linux"
    ;;
  Darwin*)
    OS_TYPE="darwin"
    ;;
  *)
    echo "Sistema operacional não suportado: $OS"
    exit 1
    ;;
esac

case "$ARCH" in
  x86_64)
    ARCH_TYPE="amd64"
    ;;
  arm64|aarch64)
    ARCH_TYPE="arm64"
    ;;
  *)
    echo "Arquitetura não suportada: $ARCH"
    exit 1
    ;;
esac

VERSION="v0.15.0"
TOOLBOX_DIR="$HOME/.mcp-toolbox"
TOOLBOX_URL="https://storage.googleapis.com/genai-toolbox/${VERSION}/${OS_TYPE}/${ARCH_TYPE}/toolbox"

echo "[1/4] Criando diretório para o toolbox..."
mkdir -p "$TOOLBOX_DIR"
cd "$TOOLBOX_DIR" || exit 1

echo "[2/4] Baixando MCP Toolbox do Google Cloud..."
echo "Versão: $VERSION"
echo "URL: $TOOLBOX_URL"

if command -v curl &> /dev/null; then
    curl -L -o toolbox "$TOOLBOX_URL"
elif command -v wget &> /dev/null; then
    wget -O toolbox "$TOOLBOX_URL"
else
    echo "[ERRO] curl ou wget não encontrado. Por favor, instale um deles."
    exit 1
fi

if [ $? -ne 0 ]; then
    echo "[ERRO] Falha ao baixar o toolbox."
    exit 1
fi

echo "[3/4] Configurando permissões..."
chmod +x toolbox

echo "[4/4] Verificando instalação..."
if [ -f toolbox ]; then
    echo "[OK] Toolbox instalado com sucesso!"
    echo "Localização: $TOOLBOX_DIR/toolbox"
    
    # Adicionar ao PATH se não estiver
    if [[ ":$PATH:" != *":$TOOLBOX_DIR:"* ]]; then
        echo ""
        echo "[INFO] Adicione ao seu ~/.bashrc ou ~/.zshrc:"
        echo "export PATH=\"\$PATH:$TOOLBOX_DIR\""
    fi
else
    echo "[ERRO] Arquivo não encontrado após download."
    exit 1
fi

echo ""
echo "========================================"
echo "Instalação Concluída!"
echo "========================================"
echo ""
echo "Próximos passos:"
echo "1. Configure a autenticação do Google Cloud:"
echo "   gcloud auth application-default login"
echo ""
echo "2. Configure seu projeto:"
echo "   gcloud config set project SEU_PROJECT_ID"
echo ""
echo "3. Atualize o mcp.json com o caminho:"
echo "   \"command\": \"$TOOLBOX_DIR/toolbox\""
echo "   OU use apenas \"toolbox\" se adicionado ao PATH"
echo ""
echo "4. Reinicie o Cursor para aplicar as mudanças"
echo ""

