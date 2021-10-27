FROM node:lts-alpine3.14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
EXPOSE 80
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
