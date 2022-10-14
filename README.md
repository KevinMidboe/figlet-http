# Hostname Larry

Little node server for generating ascii figlet font Larry 3D.

Mostly used to generate motd message of server hostname.

## Run

Install node package:

```bash
yarn
```

Start http server:

```bash
yarn start
```

## Examples

Generate Larry 3D ascii response from text:

```bash
curl localhost:3000/ascii\?text\=ragnhild
```

Generate motd executable with text and save to file:

```bash
curl localhost:3000/motd\?text\=ragnhild > 20-hostname
```

## Docker install

Run as a docker container using:

```bash
docker run -d \
  --name figlet-http \
  -p 3000:3000 \
  ghcr.io/kevinmidboe/figlet-http
```

## Systemd service

Example systemd config for running http server.

```
[Unit]
Description=Http server for running homename-larry

[Service]
WorkingDirectory=/opt/hostname-larry
ExecStart=/usr/bin/node index.js
Restart=always
# Restart service after 10 seconds if node service crashes
RestartSec=10
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=hostname-larry

[Install]
WantedBy=multi-user.target
```
