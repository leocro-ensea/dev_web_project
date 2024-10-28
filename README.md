# User Management API

A simple RESTful API built with Node.js, Express, and SQLite for managing user data. The API allows clients to create, read, update, and delete user records in a SQLite database.

## Prerequisites

- Node.js and npm installed
- SQLite3 installed

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/leocro-ensea/dev_web_project.git


## API Endpoints
Base URL : 
http://localhost:3000/api


### Routes

#### Get All Users
- **Endpoint:** `/users`
- **Method:** GET
- **Description:** Retrieves a list of all users.
- **Response:** JSON array of user objects.

#### Create New User
- **Endpoint:** `/`
- **Method:** POST
- **Description:** Creates a new user with a `firstName` and `lastName`.
- **Request Body:** JSON object with `firstName` and `lastName` fields.
- **Response:** JSON object with the new user ID and name.

#### Update User by ID
- **Endpoint:** `/:id`
- **Method:** PUT
- **Description:** Updates an existing user's `firstName` or `lastName` by ID.
- **Request Body:** JSON object with fields to update (e.g., `firstName`, `lastName`).
- **Response:** JSON object with the updated user information.

#### Delete User by ID
- **Endpoint:** `/:id`
- **Method:** DELETE
- **Description:** Deletes a user by their ID.
- **Response:** JSON object with a message confirming deletion.
