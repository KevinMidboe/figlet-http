FROM node:18

RUN mkdir -p /opt/figlet-http/lib

WORKDIR /opt/figlet-http

COPY package.json .
COPY lib/ lib

RUN yarn install --production

EXPOSE 3000

CMD ["node", "lib/app.js"]
