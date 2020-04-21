const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const Event = require("../models/event");
const User = require("../models/User");
const Booking = require("../models/booking");
const mongoose = require("mongoose");

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post("/:id", auth, async (req, res) => {
  try {
    const fetchedEvent = await Event.findById(req.params.id);

    const booking = new Booking({
      user: req.user.id,
      event: fetchedEvent,
    });
    const result = await booking.save();
    res.json(result.populate("user"));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get("/", async (req, res) => {
  try {
    let booking = await Booking.find();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
// router.get("/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);

//     // Check for ObjectId format and event
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !event) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     res.json(event);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send("Server Error");
//   }
// });
module.exports = router;
