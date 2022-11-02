FROM node:18
LABEL org.opencontainers.image.source https://github.com/KevinMidboe/figlet-http

RUN mkdir -p /opt/figlet-http/src

WORKDIR /opt/figlet-http

# COPY src/ src
# COPY tsconfig.json .
# COPY package.json .
# COPY yarn.lock .

COPY lib/ lib
COPY node_modules/ node_modules

# RUN yarn
# RUN yarn build

EXPOSE 3000

CMD ["node", "lib/app.js"]
