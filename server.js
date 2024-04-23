const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


app.use(cors())
app.use(bodyParser.urlencoded({extended: true,}));
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,"frontend","build")));

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nedunchezhiyan1010:K7fNvT.HAX9@cluster0.cw74fey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("database connected");
  } catch (err) {
    console.log("error while connecting to database", err);
  }
};

connectMongo();

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    subassemblies: {
      type: Map,
      of: {
        name: { type: String, required: true },
        parent: { type: String, required: true },
      },
      default: {}
    },
    components: {
      type: Map,
      of: {
        name: { type: String, required: true },
        parent: { type: String, required: true },
      },
      default: {}
    }
  });
  
const Product = mongoose.model("Product", productSchema);

const newCollectionSchema = new mongoose.Schema({
  Documents: { type: String, required: true },
  UID: { type: String, required: true },
  Availability: { type: String, required: true },
  Link: { type: String, required: true },
});

const NewCollection = mongoose.model("NewCollection", newCollectionSchema);


const newArray = [{ 
    name: "Product",
    id: "prodId",
    subassemblies: {
        "subId1": { name: "Subassembly 1", parent: "prodId" },
        "subId2": { name: "Subassembly 2", parent: "subId1" },
    },
    components: {
        "compId1": { name: "Component 1", parent: "prodId" },
        "compId2": { name: "Component 2", parent: "subId1" },
        "compId3": { name: "Component 3", parent: "subId2" },
    }
}];

async function insertArray() {
    try {
       await Product.insertMany(newArray);
      console.log("Array inserted successfully");
    } catch (error) {
      console.error("Error inserting array:", error);
    }
  }

  insertArray();

app.get("/api", async(req,res) => {
    try {
        const product = await Product.find({});
        res.json(product);
      } catch (error) {
        res.status(500).send(error.message);
      }
})

app.post("/api/new-collection", async (req, res) => {
  try {
    const rows = req.body; 
    const insertedRows = await NewCollection.insertMany(rows);
    console.log("Rows added:", insertedRows);
    res.status(201).send("Rows added successfully");
  } catch (error) {
      res.status(500).send(error.message);
  }
})

app.listen(5000,()=>{
    console.log("server started at port 5000")
})