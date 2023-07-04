const operations = require("../controllers/helpers/operations");
const authConfig = require("../config/authConfig");
const dataPath = authConfig.dataPath;

checkDuplicateUsername = (req, res) => {

    operations.readFile((data) => {

        const username = req.body["username"];

        const user = data.find(function(userEntry) {
            return userEntry.username === username;
        });

        if (typeof user !== "undefined") {

            res.status(400).json({
                message: "Username is already taken!"
            });

            return;
        }
        
    }, true, dataPath);
}

module.exports = checkDuplicateUsername;