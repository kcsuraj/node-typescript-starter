FROM node:12-alpine

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "start"]