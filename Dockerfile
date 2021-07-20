FROM node:16.5 AS build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent && npm run build
COPY . ./


FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]