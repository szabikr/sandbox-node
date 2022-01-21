# env-playground

Learning to use environment variables.

[The Twelve-Factor App guidance's third point](https://12factor.net/config) recommends loading all environment level configuration from and external source such as an env file.

### Usage

- Run by `$ node -r dotenv/config server.js` which reads environment variables from `.env` file

Alternatively
- Add env variables via CLI: `$ PORT=9000 NODE_ENV=development node server.js`

### Dockerizing

- Build docker image `$ docker build . -t <your username>/node-server`. `-t` flag lets you tag your image

- Run docker image `$ docker run -e NODE_ENV=dev -p 9000:9000 -d szabikr/node-server`. `-e` flag lets you specify environment variables when running the container; `-d` runs the container in detached mode; `-p` flag redirects a public port to a private port inside the container

### Tools
- [DotENV VS Code extension](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&wt.mc_id=node-nodecollection-jopapa)

### Inspiration

- [Making Your Node JS Work Everywhere with Environment Variables](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
- [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)