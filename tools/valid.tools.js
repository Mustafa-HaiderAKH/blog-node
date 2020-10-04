const validate = require("validate.js");

let validator = {};
validator.Article = (presence = true) => ({

    title: {
        type: "string",
        presence: presence,
    },
    athor: {
        type: "string",
        presence: presence,
    },
    text: {
        type: "string",
        presence: presence,
    }

})
validator.Login = (presence = true) => ({

    email: {
        email: true,
        presence: presence,
        type: "string"
    },
    password: {
        length: { minimum: 3 },
        presence: presence,
    },


})
validator.Register = (presence = true) => ({

    email: {
        email: true,
        presence: presence,
        type: "string"
    },
    password: {
        length: { minimum: 3 },
        presence: presence,
    },
    name: {

        presence: presence,
        type: "string",
        length: { minimum: 3 },

    },


})
module.exports = validator;