const express = require("express")
const route = express.Router();
const { getArticles, oneArticle, addArticle, editArticle, login, register } = require("./control")

const { auth } = require("./Middleware")

//get all article
route.get("/v1/articles", getArticles)
//get one article
route.get("/v1/article/:id", oneArticle);
//for login 
route.post("/v1/login", login)
//for register
route.get("/v1/register", register)

//post one article
route.post("/v1/article", auth, addArticle);
//edit 
route.put("/v1/article", editArticle)

module.exports = route
