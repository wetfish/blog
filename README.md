corporate
=========

Official website for Wetfish Enterprises


## How do I deploy this container stack?

See [https://github.com/wetfish/production-manifests](https://github.com/wetfish/production-manifests)
for production deployment and full stack dev env info.

For local development of this repo only, edit docker-compose.yml,
uncommenting the port exposure stanza,
and commenting out everything `traefik-backend` related.

Either way, you'll want to copy `./config.js.example` to `./config.js` and make some edits.
