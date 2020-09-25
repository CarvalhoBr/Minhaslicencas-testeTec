FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules

WORKDIR /home/node/api

COPY package.json yarn.* ./

RUN yarn

EXPOSE 3333

CMD yarn knex migrate:latest && yarn dev