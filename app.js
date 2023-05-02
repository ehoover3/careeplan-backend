const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.get("/", async (req, res) => {
  res.status(200).json({ success: true, data: "Eric made a test" });
});

app.post("/", async (req, res) => {
  const { name, age } = req.body;
  const params = {
    TableName: "Favorites",
    Item: {
      name,
      age,
      createdAt: newDate().getTime(),
    },
  };
  try {
    await dynamoDb.put(params).promise();
    res.send("Data saved successfully");
  } catch (error) {
    res.send("Error saving data");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
