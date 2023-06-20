import express from "express";
import cors from "cors"
import { getFlowers, addNewFlower } from "./src/flowers.js";
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

const flowers = [
    { type: 'marigold', color: 'orange'},
    { type: 'daisy', color: 'yellow'},
    {type: 'tulip', color: 'red'},
]

app.get("/flowers", getFlowers)
app.post("/flowers", addNewFlower)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})
