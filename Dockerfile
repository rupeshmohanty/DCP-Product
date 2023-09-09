# Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
RUN npm install
COPY . .
RUN npm run build

ENTRYPOINT ["serve", "-s", "build"]