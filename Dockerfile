FROM node:14

COPY package*.json ./
RUN npm install

RUN useradd fishy
USER fishy
WORKDIR /app
VOLUME /app
COPY --chown=fishy:fishy . /app
EXPOSE 2304

CMD [ "node", "/app/server/main.js" ]


