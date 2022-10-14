FROM node:18
LABEL org.opencontainers.image.source https://github.com/KevinMidboe/figlet-http

RUN mkdir -p /opt/figlet-http/src

WORKDIR /opt/figlet-http

COPY src/ src
COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
