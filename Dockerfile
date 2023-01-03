FROM docker.io/node:14

COPY ./app /app

USER root

RUN set -exu \
  && groupadd --gid 1101 fishy \
  && useradd --uid 1101 --gid 1101 --create-home --shell /sbin/nologin fishy \
  && chown -R fishy:fishy /app

USER fishy

RUN set -exu \
  && cd /app \
  && npm install

EXPOSE 2304

WORKDIR /app

CMD [ "node", "/app/server/main.js" ]
