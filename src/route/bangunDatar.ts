import express from "express";

import { kelilingLingkaran, luasLingkaran } from "../controller/bangunDatar";
const app = express()

/**allow read a body */
app.use(express.json())

app.post('/lingkaran/luas',luasLingkaran)
app.post('/lingkaran/keliling',kelilingLingkaran)

export default app