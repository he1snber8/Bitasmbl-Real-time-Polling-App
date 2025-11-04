// server/routes/polls.js
const express = require("express");
const router = express.Router();
let polls = [];
router.get("/", (req, res) => res.json(polls));
router.post("/", (req, res) => { polls.push(req.body); res.status(201).json(req.body); });
router.put("/:id", (req, res) => { /* update logic */ res.sendStatus(204); });
router.delete("/:id", (req, res) => { /* delete logic */ res.sendStatus(204); });
module.exports = router;