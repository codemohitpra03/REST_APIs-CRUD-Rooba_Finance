
# User Profile CRUD API

RESTful API endpoints built with Node.js and Express for managing user profiles stored in a MongoDB database. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on user profiles. Each user profile includes fields for name, email, age, country, and password. Routes are implemented to handle GET, POST, PUT, and DELETE requests for user profiles.


## API Reference

#### Get all users

```http
  GET /users
```



#### Create user

```http
  POST /users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of user |
| `email`      | `string` | **Required**. Email of user |
| `age`      | `number` | **Required**. Age of user |
| `country`      | `string` | **Required**. Country of user |
| `password`      | `string` | **Required**. Password of user |

#### Update user

```http
  PUT /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  Name of user |
| `email`      | `string` |  Email of user |
| `age`      | `number` |  Age of user |
| `country`      | `string` |  Country of user |
| `password`      | `string` |  Password of user |


#### Delete user

```http
  DELETE /users/:id
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/codemohitpra03/REST_APIs-CRUD-Rooba_Finance
```

Go to the project directory

```bash
  cd REST_APIs-CRUD-Rooba_Finance
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Server:** Node, Express

**Database:** MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` Database url for connecting to mongodb instance






## Authors

- [@codemohitpra03](https://www.github.com/codemohitpra03)
