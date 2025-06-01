import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(9090, () => console.log("http://localhost:9090"));

app.get("/", (req, res) => {
    res.send("hi");
})

app