# FROM node:18-alpine
FROM node:18.17.1-alpine3.18
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install -g pm2 && npm install && npm cache clean --force
COPY . /app
RUN npm run build 
CMD pm2-runtime  start npm -- start