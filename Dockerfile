FROM node:9.0

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install -g yarn
RUN yarn
COPY . .
