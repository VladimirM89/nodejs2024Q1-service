FROM node:20-alpine

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "dist/main.js" ]

