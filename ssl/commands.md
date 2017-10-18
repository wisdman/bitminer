How to get new SSL certificates
=========

### bitjournal.media
```shell
docker-compose exec ssl /usr/bin/certbot certonly --agree-tos --webroot -w /acme/ \
                                                  --email wisdman@ajaw.it \
                                                  -d bitminer.market
```
