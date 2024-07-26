# Usa una imagen base oficial de Node.js
FROM node:16 as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen base oficial de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de build desde la fase anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx servirá la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

# docker build -t my-vite-app .
# docker run -p 3000:80 my-vite-app

