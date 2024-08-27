import bodyParser from "body-parser";
import express from "express"
import router from "./Routes/route.js"
import dotenv from "dotenv"


dotenv.config();
const PORT = process.env.PORT
const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use("/", router);
app.listen(PORT,() => {
    console.log("Server running on http://localhost:" + PORT)
})