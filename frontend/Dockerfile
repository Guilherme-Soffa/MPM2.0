# Use uma imagem base do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos de dependências primeiro
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Exponha a porta usada pelo servidor de desenvolvimento do Angular
EXPOSE 4200

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]
