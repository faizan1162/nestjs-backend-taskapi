# Task Management API

A scalable and efficient task management API built using NestJS, TypeScript, and MySQL.

## Prerequisites

Before running the application, ensure that you have the following installed:

- **Node.js** (v20 or later)  
  Download and install from [Node.js official website](https://nodejs.org/)
- **npm** (comes with Node.js)  
  Check your npm version by running `npm -v` in the terminal.
- **MySQL**  
  Install from [MySQL official website](https://dev.mysql.com/downloads/installer/). (if you don't have mysql installed)

## Features

- **Task Management**: Create, update, delete, and list tasks.
- **Database Integration**: MySQL with TypeORM.

## Installation

Follow these steps to install and configure the project.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/faizan1162/nestjs-backend-taskapi.git
```
### 2. Install Project Dependencies
   To install the necessary dependencies, run:

```bash
$ npm install
```
### 3. Configure Environment Variables
configure .env file. You can copy the example .env.example file and rename it to .env
Then, edit the .env file with your database

### 4. Running the Application
After configuring the environment variables, you can run the application in different modes:
- **Development Mode:** 
To start the app in development mode, use:
```bash
$ npm run dev
```

## API Endpoints

| Method | Endpoint          | Description                           |
|--------|-------------------|---------------------------------------|
| GET    | `/tasks`           | List all tasks                       |
| POST   | `/tasks`           | Create a new task                    |
| PUT    | `/tasks/:id`       | Update a task                        |
| DELETE | `/tasks/:id`       | Delete a task                        |

## License
This project is licensed under the MIT License.