# env-playground

Learning to use environment variables.

[The Twelve-Factor App guidance's third point](https://12factor.net/config) recommends loading all environment level configuration from and external source such as an env file.

### Usage

- Run by `$ node -r dotenv/config server.js` which reads environment variables from `.env` file

Alternatively
- Add env variables via CLI: `$ PORT=9000 NODE_ENV=development node server.js` 

### Tools
- [DotENV VS Code extension](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv&wt.mc_id=node-nodecollection-jopapa)

### Inspiration

- [Making Your Node JS Work Everywhere with Environment Variables](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)