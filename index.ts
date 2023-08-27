import express, { Application } from "express"
import cors from "cors"

const app: Application = express();
const port: number = 4657
const url: string = "mongodb://localhost:27017/paymentDB";

app.use(cors());
app.use(express.json());

app.listen(port,() => {
    console.log("Running", port)
})