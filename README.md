# Members Only

[Live Demo](https://members-only-8kmz.onrender.com)<br/><br/>
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B?logo=theodinproject&logoColor=fff)](#)

## Overview

This is a project from [The Odin Project](https://theodinproject.com): [Project: Members Only](https://www.theodinproject.com/lessons/node-path-nodejs-members-only). In this project, I have built an exclusive clubhouse can write anonymous posts. Inside the clubhouse, members can see who the author of the post is, but outside the clubhouse, they can only see the post content but not the date and author of the post.

## Learning Points

- Understand the use of User authentications through the Passport.js middleware LocalStrategy to use session-based authentication
- Understand the concepts of HTTP requests, cookies and sessions in the backend
- Reinforced my understanding of form-validation through the use of [custom validators](https://express-validator.github.io/docs/guides/customizing/) through express-validator

## Tech Stack

- [![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
- [![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- [![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
- [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)

## Getting Started

### Prerequisites

You will need to install the latest version of npm and have PostgreSQL set up to get started on using this project

- npm

```sh
npm install npm@latest -g
```

- [PostgreSQL setup](https://www.theodinproject.com/lessons/nodejs-using-postgresql)

### Installation

Getting started on running the webpack server on your localhost, localhost:8080

1. Cloning the repository

```sh
git clone git@github.com:JohnFerrancol/members-only.git
```

2. Navigate to the members-only folder and install the npm packages

```sh
cd members-only && npm install
```

3. Create a <b>members-only</b> database in PostgreSQL and run the seeder function to set up the tables and starter data in the Express application

```sh
npm run seed
```

4. Running the Express server

```sh
npm run start
```

5. Open in web browser via: http://localhost:3000

## Roadmap

- [x] Created a Sign-up form with sanitisation and validation with a confirmPassword field and validated it using the custom validator in Express
- [x] Create a Login Form using Passport.js
- [x] Display the correct posts based on login and membership status
- [x] Add a page where members can 'join the club' by entering a passcode, where they can then see the author names on the post
- [x] Allow logged-in users to create a new post
- [x] Add a user model called admin, which can delete messages
