FROM nginx:stable-alpine
MAINTAINER Wisdman <wisdman@ajaw.it>

RUN rm -Rf /etc/nginx \
 && mkdir -p /etc/nginx \
 && mkdir -p /etc/letsencrypt \
 && mkdir -p /acme \
 && apk add --no-cache --virtual .build-deps openssl \
 && openssl req -newkey rsa:2048 -nodes -x509 -days 32767 -subj "/CN=*" \
    -keyout /etc/nginx/privkey.pem -out /etc/nginx/fullchain.pem \
 && openssl dhparam -out /etc/nginx/dhparam.pem 4096 \
 && apk del .build-deps

COPY nginx.conf /etc/nginx/nginx.conf
COPY server.conf /etc/nginx/server.conf

VOLUME /etc/letsencrypt
VOLUME /acme
VOLUME /www

EXPOSE 80 443
STOPSIGNAL SIGTERM

CMD ["nginx"]
