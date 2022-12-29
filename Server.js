const express = require('express')
const app = express()

app.get("/stylesheet", (req, res) => {
    res.sendFile(`${__dirname}/style.css`)
})

app.get("*", (req, res) => {
    res.header({
        "Link": `</stylesheet>; rel="stylesheet"`
    })
    res.send("")
})

const server = app.listen(0, () => {
    console.log(`Server listening on port ${server.address().port}
    http://127.0.0.1:${server.address().port}/`)
})