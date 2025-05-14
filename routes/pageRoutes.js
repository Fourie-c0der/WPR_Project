// routes/pageRoutes.js
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get('/about',(req, res) => {
  const team =[{
      name: "Marco",
      role: "Team Lead/Documentation Manager",
      description:"Marco was responsible for overseeing the entire project, ensuring that all team members collaborate effectively and meet deadlines. He coordinate tasks, facilitated communication, and made sure the final product aligns with the project specifications."
    },
    {
      name: "Keleabetswe",
      role: "Frontend Developer",
      description:"Kele focused on designing and implementing the user interface using EJS templates, CSS, and Bootstrap. She ensure the site is visually appealing, responsive, and user-friendly, integrating dynamic content where needed."
    },
    {
      name: "Fourie",
      role: "Backend developer",
      description:"Fourie built and managed the server-side functionality using Node.js and Express. He handle routing, form submissions, data processing, and connect the frontend to the backend to enable dynamic content rendering."

    },
    {
      name: "Qiniso",
      role: "Data Manager",
      description:"Qiniso was in charge of creating, storing, and managing the data used across the site. This includes structuring arrays for events and team info, processing contact form submissions, and writing/reading data to and from JSON files when needed."
    }];

    res.render('pages/about', {team: team});
})

router.get('/events', (req, res) => {
  const events = [
    {
      name: "Varsity Football Challenge",
      date: "2023-10-07",
      time: "14:00",
      opponent: "TUT FC",
      type: "Friendly Match",
      location: "Belgium Campus Sports Complex",
      image: "/images/soccer.jpg"
    },
    {
      name: "Tech & Football Symposium",
      date: "2023-11-12",
      time: "09:00-16:00",
      type: "Seminar",
      description: "Exploring sports technology and analytics in modern football",
      image: "/images/seminar.jpg"
    },
    {
      name: "Annual eFootball Tournament",
      date: "2023-12-02",
      time: "10:00-18:00",
      type: "Gaming Competition",
      platform: "EA Sports FC 24",
      image: "/images/fifa.jpg"
    },
    {
  name: "Inter-Campus Football Derby",
  date: "2024-01-20",
  time: "17:00",
  type: "League Match",
  opponent: "UJ FC",
  location: "Belgium Campus Sports Complex",
  image: "/images/soccer.jpg"
},
{
  name: "Mid-Year FIFA Showdown",
  date: "2024-06-15",
  time: "11:00 - 17:00",
  type: "Gaming Tournament",
  platform: "EA Sports FC 24",
  description: "An intense knockout-style tournament with prizes for the top 3 players.",
  image: "/images/fifa.jpg"
}];

  res.render('pages/events', { events });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});



// export const data = messages;
module.exports = router;

