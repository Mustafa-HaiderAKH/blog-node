module.exports.ReE = (res, error, statusCode = 400) => {
    let response = { status: false }
    res.statusCode = statusCode
    response.error = error
    return res.json(response)
}
module.exports.ReS = (res, data, statusCode = 200) => {
    let response = { status: true }
    res.statusCode = statusCode
    response.data = data
    return res.json(response)
}