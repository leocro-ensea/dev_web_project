const express = require("express")
const router = express.Router()
const { getAllUsers } = require("../controllers/usersControllers")
const db = require("./database")
const { createNewUser } = require("../controllers/usersControllers")

module.exports = router

router.post("/",createNewUser)

router.put("/:id", updateUser)

router.get("/users",getAllUsers)

router.delete("/:id", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })

	// si el est trouvé
	users.splice(userIndex, 1)

	res.json({
		msg: "utilisateur suprimée",
	})
})