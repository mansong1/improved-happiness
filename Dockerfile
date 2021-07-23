FROM node:16.5 AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:alpine as final
COPY --from=build /app/build /usr/share/nginx/html