# sequelize-postgres-express-boilerplate

I'm tired of writing the same code over and over so may as well create a boilerplate for myself.

-   [Setup](#setup)
-   [Commands](#commands)

## Will add tests later, probably.

## Things included

-   Cors: 2.8.3
-   Dotenv: 8.2.0
-   Express: 4.17.1
-   Helmet: 4.1.1
-   Morgan: 1.10.0
-   Pg: 8.3.3
-   Pg-hstore: 2.3.3
-   sequelize: 6.3.5
-   sequelize-cli: 6.2.0
-   nodemon: 2.0.4

### Setup

-   Change environment variables to your liking
-   Change .prettierrc config to your liking
-   Add .env to gitignore file

### Commands

```
$ npm run server:cold  // Disables hot reload
$ npm run server:hot // Enables hot reload
$ npm run migrate // Generic migrate all
$ npm run migrate:undo-all // Undos all migrations
$ npm run migrate:reset // Undos migrations then preforms migrations again.

```
