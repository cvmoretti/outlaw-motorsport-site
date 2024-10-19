# Usando a imagem base oficial do Node.js
FROM node:latest

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos da aplicação para o container
COPY . .

# Compilar o projeto para produção
RUN npm run build

# Usando uma imagem leve do servidor Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos de build do React para o diretório padrão do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
