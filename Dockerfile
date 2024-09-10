FROM node:latest

WORKDIR /app

COPY ./ /app

RUN chown -R node:node /app
USER node

RUN npm install

WORKDIR /app
ENTRYPOINT ["npm", "run", "dev"]
