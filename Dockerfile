# Base
FROM node:slim AS develop-stage

WORKDIR /app

COPY package*json ./

RUN npm ci 

COPY . .

# Build
FROM develop-stage AS build-stage

RUN npm run build


# Production serve
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
