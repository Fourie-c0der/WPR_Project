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
// add the 
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



let events = [{
      name: "Varsity Football Challenge",
      date: "2023-10-07",
      time: "14:00",
      opponent: "TUT FC",
      type: "Friendly Match",
      location: "Belgium Campus Sports Complex"
    },
    {
      name: "Tech & Football Symposium",
      date: "2023-11-12",
      time: "09:00-16:00",
      type: "Seminar",
      description: "Exploring sports technology and analytics in modern football"
    },
    {
      name: "Annual eFootball Tournament",
      date: "2023-12-02",
      time: "10:00-18:00",
      type: "Gaming Competition",
      platform: "EA Sports FC 24"
    }
];
