FROM node:10.16.0-alpine

WORKDIR /usr/src/api

ENV PATH /usr/src/api/node_modules/.bin:$PATH

COPY package.json /usr/src/api/package.json
RUN npm install

CMD ["npm", "start"]