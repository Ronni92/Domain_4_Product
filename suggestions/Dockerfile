FROM node:14-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package.json /app/
RUN npm install

COPY . /app/

# Exponer puerto 4000
EXPOSE 4000

# Comando de ejecución
CMD ["node", "app.js"]
