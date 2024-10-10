const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const getReturnValue = (boughtAt, marketPrice, quantity) => quantity * ( marketPrice - boughtAt);

const getTotalReturn = (stock1, stock2, stock3, stock4) => stock1 + stock2 + stock3 + stock4;

const getReturnPercentage = (boughtAt, returns) => 100 * ( returns / boughtAt );

const getStatus = returnPercentage => returnPercentage>0 ? 'profit' : 'loss';

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis IPO!');
});

app.get('/calculate-returns', (req,res)=>{
  const {boughtAt, marketPrice, quantity} = req.query;
  res.send(getReturnValue(+boughtAt, +marketPrice, +quantity).toString());
})

app.get('/total-returns', (req,res)=>{
  const {stock1, stock2, stock3, stock4} = req.query;
  res.send(getTotalReturn(+stock1, +stock2, +stock3, +stock4).toString());
})

app.get('/calculate-return-percentage', (req,res)=>{
  const {boughtAt, returns} = req.query;
  res.send(getReturnPercentage(+boughtAt, +returns).toString());
})

app.get('/total-return-percentage', (req,res)=>{
  const {stock1, stock2, stock3, stock4} = req.query;
  res.send(getTotalReturn(+stock1, +stock2, +stock3, +stock4).toString());
})

app.get('/status', (req,res)=>{
  const {returnPercentage} = req.query;
  res.send(getStatus(+returnPercentage));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
