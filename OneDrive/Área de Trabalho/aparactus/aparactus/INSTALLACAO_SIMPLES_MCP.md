# Instalação Simples - Google Cloud MCP ✅

## ✅ Instalação Concluída!

O MCP Toolbox do Google Cloud foi instalado com sucesso!

**Localização:** `C:\Users\mando\.mcp-toolbox\toolbox.exe`

## 📝 Próximos Passos

### 1. Configurar Autenticação do Google Cloud

```bash
gcloud auth application-default login
```

### 2. Configurar seu Projeto

```bash
gcloud config set project SEU_PROJECT_ID
```

Substitua `SEU_PROJECT_ID` pelo ID do seu projeto no Google Cloud.

### 3. Atualizar o mcp.json

O arquivo `mcp.json` já foi atualizado com o caminho do toolbox. Você só precisa:

1. Substituir `"SEU_PROJECT_ID"` pelo ID real do seu projeto
2. Reiniciar o Cursor

### 4. Serviços Disponíveis

Você pode configurar diferentes serviços do Google Cloud:

#### BigQuery (já configurado):

```json
"google-cloud-bigquery": {
  "type": "stdio",
  "command": "C:\\Users\\mando\\.mcp-toolbox\\toolbox.exe",
  "args": ["--prebuilt", "bigquery", "--stdio"],
  "env": {
    "BIGQUERY_PROJECT": "seu-project-id"
  }
}
```

#### Cloud SQL (MySQL):

```json
"google-cloud-sql": {
  "type": "stdio",
  "command": "C:\\Users\\mando\\.mcp-toolbox\\toolbox.exe",
  "args": ["--prebuilt", "cloudsql-mysql", "--stdio"],
  "env": {
    "CLOUDSQL_PROJECT": "seu-project-id",
    "CLOUDSQL_INSTANCE": "sua-instancia"
  }
}
```

#### Spanner:

```json
"google-cloud-spanner": {
  "type": "stdio",
  "command": "C:\\Users\\mando\\.mcp-toolbox\\toolbox.exe",
  "args": ["--prebuilt", "spanner", "--stdio"],
  "env": {
    "SPANNER_PROJECT": "seu-project-id"
  }
}
```

## 🎉 Pronto!

Agora você tem:

- ✅ Context7 MCP instalado e configurado
- ✅ Figma MCP configurado
- ✅ Google Cloud MCP Toolbox instalado

**Reinicie o Cursor** e use `/mcp` para verificar o status dos servidores!

## 📚 Recursos

- [Documentação Google Cloud MCP](https://docs.cloud.google.com/mcp)
- [MCP Toolbox Releases](https://storage.googleapis.com/genai-toolbox/)
