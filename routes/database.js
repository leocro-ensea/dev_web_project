const sqlite3 = require("sqlite3").verbose()

// Open a connection to the database
const db = new sqlite3.Database("./routes/users.db", (err) => {
    if (err) {
        console.error("Erreur lors de l'ouverture de la base de données :", err.message)
    } else {
        console.log("Connecté à la base de données SQLite.")

        // Create the 'users' table if it doesn't already exist
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error("Erreur lors de la création de la table :", err.message)
                }
            }
        )
    }
})

// Export the database connection for use in other modules
module.exports = db
