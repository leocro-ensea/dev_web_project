const express = require("express")
const router = express.Router()

// Import functions from the user controllers
const { getAllUsers } = require("../controllers/usersControllers")
const { createNewUser } = require("../controllers/usersControllers")
const { updateUser } = require("../controllers/usersControllers")
const { deleteUser } = require("../controllers/usersControllers")

// Export the router for use in the main application
module.exports = router

// Route to handle creating a new user (POST request)
router.post("/", createNewUser)

// Route to handle updating an existing user by ID (PUT request)
router.put("/:id", updateUser)

// Route to retrieve all users (GET request)
router.get("/users", getAllUsers)

// Route to delete a user by ID (DELETE request)
router.delete("/:id", deleteUser)
