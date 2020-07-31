# Message  API

<p align="center">
  <a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJs-7.x-blue"></a>
  <a href="https://typeorm.io/#/"><img src="https://img.shields.io/badge/TypeOrm-7.x-green"></a>
  <a href="https://graphql.org/"><img src="https://img.shields.io/badge/GraphQl-15.x-orange"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Nodejs-12.x-red"></a>
</p>

## Summary

- [Dependencies](#dependencies)
- [About project](#about-project)
- [How to use the project](#how-to-use-the-project)
  - [First: Clone the repository](#First:-Clone-the-repository)
  - [Second: run the code to install all necessary dependencies](#Second:-run-the-code-to-install-all-necessary-dependencies)
  - [Third: let's perform the migrations](#Third:-let's-perform-the-migrations)
  - [Fourth: accessing GraphQl functions](#Fourth:-accessing-GraphQl-functions)
    - [Users](#Users)
    - [Message](#Message)
- [Authors](#Authors)

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

### Fourth: accessing GraphQl functions

*To access the GraphQl playground access the route "http:// localhost:3000/graphql", it can be carried out all tests that rea not directly through the frontend.*

### Users

### ✅  *** List all users***

```
query{
  getUsers{
    id
    email
    createdAt
    updatedAt
  }
}
```

↩ return

```
{
  "data": {
    "getUsers": [
      {
        "id": 1,
        "email": "Anderson_Andrade_@outlook.com",
        "createdAt": "2020-07-30T20:03:57.000Z",
        "updatedAt": "2020-07-30T20:03:57.000Z"
      },
    ]
  }
}
```

Field can be requested: 

- id: *number*
- email: *string*
- createdAt: *date*
- updatedAt: *date*

### ✅  *Register user*

```
mutation{
	createOrLoginUser(data:{
    email:"Anderson_Andrade_@outlook.com"
  }){
		id
    email
    createdAt
    updatedAt
    
  }
}
```

Required field: email: *string*

↩ return

```
{
  "data": {
    "createOrLoginUser": {
      "id": 2,
      "email": "anderson_andrade_@outlook.com",
      "createdAt": "2020-07-30T20:45:01.000Z",
      "updatedAt": "2020-07-30T20:45:01.000Z"
    }
  }
}
```

Field can be requested:

- id: *number*
- email: *string*
- createdAt: *date*
- updatedAt: *date*

*if the user is already registered he will return only the user registration, not being made a new registration.*

### Message

### ✅ ***messages from a specific user***

```
query{
  getMessagesFromUser(userId: 1){
    id
    userId
    content
    createdAt
    updatedAt
  }
}
```

Required field: userId: *number*

↩ return

```
{
  "data": {
    "getMessagesFromUser": [
      {
        "id": 3,
        "userId": 1,
        "content": "is running",
        "createdAt": "2020-07-30T20:35:20.000Z",
        "updatedAt": "2020-07-30T20:35:20.000Z"
      },
    ]
  }
}
```

Field can be requested:

- id: *number*
- userId: *number*
- content: *string*
- createdAt: *date*
- updatedAt: *date*

✅ ***Create a new message***

```
mutation{
  createMessage(data:{
    content: "is running",
    userId: 2
  })
  {
    id
    createdAt
    updatedAt
    userId
    user{
      id
    }
  }
}
```

Required field: {

​	content: *string*
​	userId: *number*

}

↩ return

```
{
  "data": {
    "createMessage": {
      "id": 9,
      "createdAt": "2020-07-30T23:34:53.000Z",
      "updatedAt": "2020-07-30T23:34:53.000Z",
      "user": {
        "id": 2
      }
    }
  }
}
```

Field can be requested:

- id: *number*
- createdAt: *date*
- updatedAt: *date*
- user: *number*

*in **user** the same user fields can be requested from above in a user request*

### ✅ *get all messages*

```
query {
  getMessages{
    id
    userId
    content
    createdAt
    updatedAt
  }
}
```

↩ return

```
{
  "data": {
    "getMessages": [
      {
        "id": 3,
        "userId": 1,
        "content": "is running",
        "createdAt": "2020-07-30T20:35:20.000Z",
        "updatedAt": "2020-07-30T20:35:20.000Z"
      },
    ]
  }
}
```

Field can be requested:

- id: *number*
- userId: *number*
- content: *string*
- createdAt: *date*
- UpdatedAt: *date*

✅ ***Deleting a specific message***

```
mutation{
	deleteMessage(data:{
    id:7
    userId:1
  }){
    id
    content
    createdAt
    updatedAt
  }
}
```

Required field: {

​	id: *number*
​	userId: *number*

}

↩ return

```
{
  "data": {
    "deleteMessage": {
      "id": 7,
      "content": "is running",
      "createdAt": "2020-07-30T20:37:55.000Z",
      "updatedAt": "2020-07-30T20:37:55.000Z"
    }
  }
}
```

Field can be request

- id: *number*
- content: *number*
- createdAt: *date*
- updatedAt: *date*

### Project version

1.0

## 👤 Authors

| Anderson Andrade                                             |
| ------------------------------------------------------------ |
| <img src="https://avatars0.githubusercontent.com/u/31743641?s=400&u=b6d9e1c428279846440325b0fae90f4b9c4d1d98&v=4" width="110"> |
| <a href="https://github.com/AndersonAndrad">Github</a>       |
| <a href="https://www.linkedin.com/in/AndersonAndrad/">Linkedin</a> |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/andersonandrad/nest-code-challenge-api/issues).

## Show your support

Give a ⭐️ if this project helped you!