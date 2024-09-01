FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./your_certificate.crt /etc/ssl/certs/your_certificate.crt
COPY ./your_private_key.key /etc/ssl/private/your_private_key.key

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
