FROM node:14

COPY package*.json ./
RUN npm install
WORKDIR /app
VOLUME /app
COPY . /app
EXPOSE 2304
CMD [ "node", "/app/server/main.js" ]


