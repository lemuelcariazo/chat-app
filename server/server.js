const express = require("express");
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(cors)
app.use(express.json)

const PORT = process.env.PORT | 5000
