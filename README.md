# Message  API

## Summary

- [Dependencies](#dependencies)
- [About project](#about-project)
- [How to use the project](#how-to-use-the-project)

## Dependencies

- [Nodejs](https://nodejs.org/en/)
- [NestJs](https://docs.nestjs.com/)
- [GraphQl](https://graphql.org/)
- [TypeOrm](https://typeorm.io/#/)

## About project

This project was developed with the idea for a messaging application, Where only the email is needed to create an account, with the possibility of deleting the messages. This project comes from a [video](https://www.youtube.com/watch?v=nDN4JRbFEns&t=4678s) made available by [RocketSeat](https://rocketseat.com.br/).

## How to use the project

### First: Clone the repository

```
git clone https://github.com/AndersonAndrad/nest-code-challenge-api.git
```

*Obs: In this project I'm using **yarn**, but you can choose another one of your preference.*

### Second: run the code to install all necessary dependencies

```
yarn install
```

### Third: let's perform the migrations

*Obs: to execute the following command, add two dependencies globally, there's an internal configuration that was made to facilitate, it will be explained later in the readme.*

*Adding [nestjs](https://docs.nestjs.com/) to globally*

```
yarn add global @nestjs/cli
```

Adding [typeorm](https://typeorm.io/#/using-cli) to globally 

```
yarn add global ts-node
```

*Create migrations*

```
yarn typeorm migration:run
```

**To be continue...**