# Hostname Larry

Little node server for generating ascii figlet font Larry 3D.

Mostly used to generate motd message of server hostname.

## Run

Install node package:
```bash
npm install
```

Run http server:
```bash
node index.js
```

## Examples

Generate Larry 3D ascii response from message:
```bash
curl localhost:3000/ascii\?message\=hello%20world
```

Generate motd executable with message and save to file:
```bash
curl localhost:3000/motd\?message\=hello%20world > 20-hostname
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
