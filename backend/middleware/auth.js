const jwt = require("jsonwebtoken");
const config = require("../config.js");

module.exports = (req, res, next) => {
  //lots of things might go wrond so try catch
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.token = jwt.verify(token, `${config.JWT_TOKEN}`);

    if (req.body.userId && req.body.userId !== req.token.userId) {
      throw "UserID not valid!";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: "Invalid request!" });
  }
};
