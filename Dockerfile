FROM nginx:1.21.6-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html