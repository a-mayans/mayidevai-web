# Build
FROM node:20-alpine AS build
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_N8N_WEBHOOK_LEAD
ENV VITE_N8N_WEBHOOK_LEAD=$VITE_N8N_WEBHOOK_LEAD
RUN npm run build

# Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
