FROM alpine:latest
MAINTAINER Wisdman <wisdman@ajaw.it>

RUN mkdir -p /etc/letsencrypt \
 && mkdir -p /acme \
 && apk add --no-cache certbot \
 && mkdir -p /var/spool/cron/crontabs \
 && echo '0 2 * * 6 /usr/bin/certbot renew --no-self-upgrade' > /var/spool/cron/crontabs/certbot-renew

VOLUME /etc/letsencrypt
VOLUME /acme

CMD /usr/sbin/crond -fd15
