const fs = require("fs");
const mongoose = require("mongoose");
const Event = require("./models/Event");
const Ticket = require("./models/Ticket");
const User = require("./models/User");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/bookmyshow_test");

  const events = JSON.parse(fs.readFileSync("./data/events.json"));
  const tickets = JSON.parse(fs.readFileSync("./data/tickets.json"));
  const users = JSON.parse(fs.readFileSync("./data/users.json"));

  await Event.insertMany(events);
  await Ticket.insertMany(tickets);
  await User.insertMany(users);

  console.log("Fake Concert Data Inserted Successfully!");
  process.exit();
})();
