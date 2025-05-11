// app.js
const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const fs = require('fs');

const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

let messages= [];

const fp = path.join(__dirname, 'data.json');

// Load existing messages from file if it exists
if (fs.existsSync(fp)) {
  const fileData = fs.readFileSync(fp, 'utf-8');
  try {
    messages = JSON.parse(fileData);
  } catch (err) {
    console.error('Invalid JSON in messages.json:', err);
    messages = [];
  }
}

app.post("/contact",(req,res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  messages.push({name,email,message});

fs.writeFile(
  path.join(__dirname, "data.json"),
  JSON.stringify(messages, null, 2),
  err =>{
    if(err){
      console.error('Failed to write to file'+err);
      return res.status(500);
    }
    res.redirect("/thankyou")
  }

)
});

let team =[];
let events = [
  // {name: "Meet and great", date: "2022-01-01"},
];
// Create and manage data arrays in a separate module or directly in route files:
// Team info array for the About page
// Events array for the Events page
// Contact messages array for storing form submissions
// Pass arrays to EJS views and use EJS loops to render them dynamically.
// Ensure consistent structure and clean access to data (no hardcoding in EJS).


