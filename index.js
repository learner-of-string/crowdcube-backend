const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.mongoURI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db(`crowdcubeDB`);
        const usersCollection = database.collection(`users`);
        const campaignsCollection = database.collection(`campaigns`);

        // campaign related api

        app.post("/add-new-campaign", async (req, res) => {
            const newCampaign = req.body;
            newCampaign.whatsapp = true;
            console.log("Creating new campaign", newCampaign);
            const result = await campaignsCollection.insertOne(newCampaign);
            res.send(result);
        });

        // users related api
        app.get("/users/:email", async (req, res) => {
            const email = req.params.email;
            const query = { email };
            const result = await usersCollection.findOne(query);
            res.send(result);
        });

        app.post("/users", async (req, res) => {
            const newUser = req.body;
            console.log("creating new user: ", newUser);
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send(`crowd is cubing in the port of ${port}`);
});

app.listen(port, () => {
    console.log(`Crowd is cubing in the port of ${port}`);
});
