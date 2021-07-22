FROM node:16.5 AS build
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx:alpine as final
COPY --from=build /app/build/ /var/www/html/