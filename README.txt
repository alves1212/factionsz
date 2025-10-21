# SecureCheck - Integração Real com VirusTotal (Local)

Arquivos neste pacote:
- main.html  (frontend com seu design original; JS atualizado para usar proxy local)
- server.js  (backend Express que faz proxy para a API do VirusTotal)
- .env.example (exemplo de arquivo .env)
- README.txt (este arquivo)

## Passos para rodar localmente

1. No diretório do projeto, instale dependências:
   npm install express multer node-fetch form-data cors dotenv

2. Crie um arquivo `.env` com sua chave do VirusTotal (copie de .env.example):
   VT_API_KEY= SUA_CHAVE_AQUI

3. Rode o servidor proxy:
   node server.js

   Ele ficará ouvindo em http://localhost:3001

4. Abra o arquivo `main.html` no seu navegador (duplo-clique ou via servidor estático). 
   O frontend enviará requisições para http://localhost:3001

Observações:
- NÃO coloque sua API Key no frontend. A chave fica apenas no .env do servidor proxy.
- O proxy deve estar rodando antes de clicar em "Iniciar Verificação".
- Se o VirusTotal demorar para completar a análise, o frontend fará polling por até alguns minutos.
- Limite de arquivo: 32MB (ajustável no servidor e no multer).
