# Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
RUN npm install -g server
COPY . .
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]