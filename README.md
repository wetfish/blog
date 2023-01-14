corporate
=========

Official website for Wetfish Enterprises

## How do I deploy this container stack?

See [https://github.com/wetfish/production-manifests](https://github.com/wetfish/production-manifests)
for production deployment and full stack dev env info.

For development:

First you'll want to copy `./config.js.example` to `./config.js` and make some edits.

Then, to run just this stack, do 
```bash
docker compose \
  -f docker-compose.dev.yml \
  up -d \
  --build \
  --force-recreate

docker compose logs -f
```

The service will be available at [http://127.0.0.1:2304](http://127.0.0.1:2304)
