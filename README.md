# Check Transfer App

This project manage money transfers between users like a bank app
"should".

It allow you to login in a non-secure way (just to simulate it) and
add recipients that will receive any number of transfers. Also, the app
let you to see the transfer history made by the current user.

:rocket: Visit our website: [Transfer App](https://check-transfer-app.herokuapp.com/)

## TL;DR

In order to run the app localy, create a `.env` file and with help
of [`.env.example`](./.env.example) and run following commands:

```bash
# Create local MongoDB instance using Docker
docker compose up -d

# Install dependencies
yarn

# Start all projects
yarn serve:all
```

## General Overview

The project was made using a mono repository with help of Nx and
has two projects in it: API and Web. It was deployed to **Heroku**.

Tests were not been set :frowning_face: sorry about that, just matter
of time.

## Relevant Dependecies

The project uses the following major dependencies:

- [Nx](https://nx.dev/)
- [Angular](https://angular.io/)
- [NestJS](https://nestjs.com/)
