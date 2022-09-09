# Social-Network-API-NOSQL

- [Description](#description) 
- [Usage](#usage) 
- [Technologies Used](#technologies-used) 
- [Installation](#installation) 
- [Screenshot](#screenshot) 
- [Walkthrough Video](#walkthrough-video) 
- [License](#license) 

## Description

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Usage

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Technologies Used

- Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
In your terminal, type the following commands in succession.

```
npm i
```

```
npm install
```

## Screenshot 

![Node Image](/assets/img/readmeimg.png)

## Walkthrough Video

Click [here](https://watch.screencastify.com/v/HkHsr3sn2lW3HQMhfjS5/) for the deployed application.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under MIT.