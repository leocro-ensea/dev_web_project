const express = require("express")
const app = express()
const port = 3000

// Import the router handling user-related routes
const usersRouter = require("./routes/users.js")

// Middleware to parse JSON request bodies
app.use(express.json())

// Route all requests starting with '/api/' to the usersRouter
app.use("/api/", usersRouter)

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`) // Corrected string interpolation for the port variable
})
