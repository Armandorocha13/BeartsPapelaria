@echo off
echo ========================================
echo Instalador Simples - Google Cloud MCP
echo ========================================
echo.

REM Verificar se o curl está disponível
where curl >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] curl não encontrado. Instalando via Chocolatey...
    echo Por favor, instale o curl ou baixe manualmente o toolbox.
    pause
    exit /b 1
)

echo [1/4] Criando diretório para o toolbox...
if not exist "%USERPROFILE%\.mcp-toolbox" mkdir "%USERPROFILE%\.mcp-toolbox"
cd /d "%USERPROFILE%\.mcp-toolbox"

echo [2/4] Baixando MCP Toolbox do Google Cloud...
echo Versão: v0.15.0
curl -L -o toolbox.exe https://storage.googleapis.com/genai-toolbox/v0.15.0/windows/amd64/toolbox.exe

if %errorlevel% neq 0 (
    echo [ERRO] Falha ao baixar o toolbox.
    pause
    exit /b 1
)

echo [3/4] Verificando instalação...
if exist toolbox.exe (
    echo [OK] Toolbox baixado com sucesso!
    echo Localização: %USERPROFILE%\.mcp-toolbox\toolbox.exe
) else (
    echo [ERRO] Arquivo não encontrado após download.
    pause
    exit /b 1
)

echo [4/4] Configurando variável de ambiente...
setx PATH "%PATH%;%USERPROFILE%\.mcp-toolbox" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] PATH atualizado. Reinicie o terminal para usar 'toolbox' diretamente.
) else (
    echo [AVISO] Não foi possível atualizar o PATH automaticamente.
    echo Adicione manualmente: %USERPROFILE%\.mcp-toolbox ao seu PATH
)

echo.
echo ========================================
echo Instalação Concluída!
echo ========================================
echo.
echo Próximos passos:
echo 1. Configure a autenticação do Google Cloud:
echo    gcloud auth application-default login
echo.
echo 2. Configure seu projeto:
echo    gcloud config set project SEU_PROJECT_ID
echo.
echo 3. Atualize o mcp.json com o caminho completo:
echo    "command": "%USERPROFILE%\.mcp-toolbox\toolbox.exe"
echo    OU use apenas "toolbox" se o PATH foi atualizado
echo.
echo 4. Reinicie o Cursor para aplicar as mudanças
echo.
pause

