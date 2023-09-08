FROM node:latest AS build

WORKDIR /build

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY public/ public

COPY src/ src

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]