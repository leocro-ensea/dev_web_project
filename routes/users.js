const express = require("express")
const router = express.Router()

router.get("/users", (req, res) => {
    res.json({
        msg: "Ceci est un test depuis le routeur",
    })
})

module.exports = router
const usersRouter = require("./routes/users.js")
app.use("/api/", usersRouter)