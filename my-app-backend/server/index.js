const setup = require('../setup.json')
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const userData = require("../Schema/UserData");
const contest = require('../Schema/contest');

const server = express();
server.use(cors()); // Allow all origins by default
server.use(express.json());

server.get('/', (req, res) => {
    res.send('hi');
});

mongoose.connect('mongodb://localhost:27017/local')
    .then(async () => {
        console.log("Connected to MonogoDb")
        server.listen(setup.PORT, () => console.log(`http://localhost:${setup.PORT}`));
    })
    .catch((err) => {
        console.log(err)
    })



server.post("/signup", async (req, res) => {
    const resivedData = req.body;
    const d = await userData.find({ username: resivedData.username });
    if (d.length > 0) {
        res.status(400).send(JSON.stringify({
            ok: false,
            payload: {
                message: "user name is already exist."
            }
        }));
        return;
    }

    const newUser = await userData.create(resivedData);
    res.status(200).send(JSON.stringify({
        ok: true,
        payload: {
            message: "why you are checking paload.message that the ok is true you MF"
        }
    }));
});

server.post('/uploadcontest', async (req, res) => {
    const data = req.body;
    try {
        data.fetchCount = 0;
        const newContest = await contest.create(data);
        res.status(200).send(JSON.stringify({
            ok: true
        }));
        const userDet = await userData.findOne({ username: data.username });
        await userData.updateOne(userDet, {
            $addToSet: { hostContest: newContest._id }
        });
    } catch (error) {
        res.status(400).send(JSON.stringify({
            ok: false
        }));
    }
});

server.get("/contest/:id", async (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    try {
        const contestReq = await contest.findOne(filter);
        await contestReq.updateOne(
            {fetchCount:contestReq.fetchCount + 1}
        )
        res.status(200).send(JSON.stringify({
            ok: true,
            payload: {
                contest: contestReq,
                message: "hai hai hai"
            }
        }));
    } catch (e) {
        res.status(400).send(JSON.stringify({
            ok: false,
            payload: {
                message: "contest not found",
                errer:e
            }
        }));
    }
});

server.post('/deleteList', async (req, res) => {
    const data = req.body;
    try {
        await contest.deleteOne({ _id: data.id });
        const filter = { username: data.username };
        const update = { $pull: {} };

        if (data.typeOf === "HOST") {
            update.$pull.hostContest = data.id;
        } else {
            update.$pull.testContest = data.id;
        }

        const result = await userData.updateOne(filter, update);

        res.status(200).send(JSON.stringify({
            ok: true,
            payload: {
                message: "List is removed successfully"
            }
        }));
    } catch (e) {
        res.status(400).send(JSON.stringify({
            ok: false,
            payload: {
                message: e.message
            }
        }));
    }
});


server.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const d = await userData.find({ username: username });
    if (d.length == 0) {
        res.status(400).send(JSON.stringify({
            ok: false,
            payload: {
                message: "user name is does not exist."
            }
        }));
        return;
    }
    if (d[0].password != password) {
        res.status(400).send(JSON.stringify({
            ok: false,
            payload: {
                message: "Incorrect Password"
            }
        }));
        return;
    }
    res.status(200).send(JSON.stringify(
        {
            ok: true,
            payload: {
                message: "Login successfull",
                userData: d
            }
        }
    ))
})

server.post("/getList", async (req, res) => {
    const data = await userData.findOne({ username: req.body.username });
    const contestIdList = (() => {
        if (req.body.typeOfList === "HOST") return data.hostContest;
        if (req.body.typeOfList === "TEST") return data.testContest;
        throw new Error("invaled type");
    })();

    const finalList = [];

    contestIdList.forEach(async (id, inx) => {
        const tc = await contest.findById(id);
        finalList.push(tc);
        if (inx == contestIdList.length - 1) {
            res.status(200).send(JSON.stringify(finalList));
        }
    });
});




server.get("/test", async (req, res) => {
    res.send("not test avalable");
});