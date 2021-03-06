
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:1.15-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80