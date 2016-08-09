# Boilerplate for services built with nodejs and optionally express
Opinionated boilerplate used in Konnektid to build services in express

## Build docker:
```
docker -t <your-image-name> .
```

## Start with docker:

**build**

**development**
```
docker run -ti --rm -p 3000:3000 --name <your-container-name> -v `pwd`/src:/usr/src/app/src -e NODE_ENV=development <your-image-name> npm run start:dev
```

**production**
```
docker run -P --name <your-container-name> -e NODE_ENV=production <your-image-name>
```
Notice that this command will expose the port defined in the Dockerfile to a random port
