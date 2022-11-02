# Hostname Larry

Little node server for generating ascii figlet font Larry 3D.

Mostly used to generate motd message of server hostname.

## Run

Install node package:

```bash
yarn
```
Compile typescript files:

```bash
yarn build
```

Start http server:

```bash
yarn start
```

## Examples

Generate Larry 3D figlet response from text:

```bash
curl localhost:3000/figlet\?text\=ragnhild
```

Outputs:
```
                             __           ___       __     
                            /\ \      __ /\_ \     /\ \    
 _ __    __       __     ___\ \ \___ /\_\\//\ \    \_\ \   
/\`'__\/'__`\   /'_ `\ /' _ `\ \  _ `\/\ \ \ \ \   /'_` \  
\ \ \//\ \L\.\_/\ \L\ \/\ \/\ \ \ \ \ \ \ \ \_\ \_/\ \L\ \ 
 \ \_\\ \__/.\_\ \____ \ \_\ \_\ \_\ \_\ \_\/\____\ \___,_\
  \/_/ \/__/\/_/\/___L\ \/_/\/_/\/_/\/_/\/_/\/____/\/__,_ /
                  /\____/                                  
                  \_/__/
```

Generate motd executable with text and save to file:

```bash
curl localhost:3000/motd\?text\=ragnhild > 20-hostname
```

### Options
Api endpoints `/text` & `/motd` have the following query options:

| query param | type   | description                          | required |
|-------------|--------|--------------------------------------|----------|
| text        | string | text to generate                     | yes      |
| font        | string | select font, get list from /fonts    | no       |
| width       | number | max character width before linebreak | no       |

## Docker install

Run as a docker container from github container registry:

```bash
sudo docker run -d \
  --name figlet-http \
  -p 3000:3000 \
  ghcr.io/kevinmidboe/figlet-http
```

Run as docker locally:
```bash
yarn build; \
sudo docker build -t figlet-http .; \
sudo docker run -d \
  --name figlet-http \
  -p 3000:3000 \
  figlet-http
```


## Systemd service

Example systemd config for running http server.

Clone repo to: `/opt/figlet-http`


`/etc/systemd/system/figlet-http.service`

```
[Unit]
Description=Http server for running figlet-http

[Service]
WorkingDirectory=/opt/figlet-http
ExecStart=/usr/bin/yarn start
Restart=always
# Restart service after 10 seconds if node service crashes
RestartSec=10
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=figlet-http

[Install]
WantedBy=multi-user.target
```
