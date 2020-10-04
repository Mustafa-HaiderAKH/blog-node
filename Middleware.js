var jwt = require('jsonwebtoken');
const { ReE } = require("./tools/help-status");
const PageNotfont = (req, res) => {
    res.statusCode = 404;
    return res.json("404 not found");
}
const auth = (req, res, next) => {
    //get token from req header
    const token = req.headers.token;
    if (!token) return ReE(res, "miss token")
    //verift the token with the key
    try {
        const payload = jwt.verify(token, "shhhhh")
        next();
    } catch (error) {
        return ReE(res, "The vaild incorrect")
    }
    //if ok -> next()
    //if not retrun erre
}


module.exports.notFound = PageNotfont
module.exports.auth = auth