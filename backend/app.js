import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from "cors"
import Holding from "./models/holdings.js";
import Position from "./models/positions.js";

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

//conneting db
async function main() {
  await mongoose.connect(process.env.MONGO_DB_URI);
}
main()
.then(()=>{
  console.log(`connection to database was successful`);
})
.catch((err)=>{
  console.log(err)
});

app.listen(PORT, ()=>{
  console.log(`app is listening to port ${PORT}`);
});

//to get holdings and positions of user
app.get("/allHoldings" ,async (req, res)=>{
  const data = await Holding.find({});
  res.json(data);
});

app.get("/allPositions" ,async (req, res)=>{
  const data = await Position.find({});
  res.json(data);
});






