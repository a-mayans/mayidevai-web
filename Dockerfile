# ---------- BUILD ----------
FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependencias (incluye devDependencies → vite)
COPY package*.json ./
RUN npm ci

# Copiar código
COPY . .

# Variable de entorno para Vite (build-time)
ARG VITE_N8N_WEBHOOK_LEAD
ENV VITE_N8N_WEBHOOK_LEAD=$VITE_N8N_WEBHOOK_LEAD

# Build de Vite
RUN npm run build


# ---------- SERVE ----------
FROM nginx:alpine

# Copiar build estático
COPY --from=build /app/dist /usr/share/nginx/html

# Config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
