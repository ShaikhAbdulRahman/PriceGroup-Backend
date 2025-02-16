// const express = require("express");
// const PriceGroup = require("../models/models");
// const router = express.Router();

// router.post("/price-group", async (req, res) => {
//   try {
//     const priceGroup = new PriceGroup(req.body);
//     const savedPriceGroup = await priceGroup.save();
//     res.status(201).json({ data: savedPriceGroup });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/price-group", async (req, res) => {
//   try {
//     const priceGroups = await PriceGroup.find();
//     res.status(200).json(priceGroups);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get Single Price Group
// router.get("/price-group/:id", async (req, res) => {
//   try {
//     const priceGroup = await PriceGroup.findById(req.params.id);
//     if (!priceGroup) return res.status(404).json({ message: "Not Found" });
//     res.status(200).json(priceGroup);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update Price Group
// router.put("/price-group/:id", async (req, res) => {
//   try {
//     const priceGroup = await PriceGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(priceGroup);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete Price Group
// router.delete("/price-group/:id", async (req, res) => {
//   try {
//     await PriceGroup.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const priceGroupController = require('../controller/priceGroupController');

router.post('/search', priceGroupController.search);
router.post('/entity', priceGroupController.getEntity);
router.get('/entity/:id', priceGroupController.getEntityById);
router.get('/entity', priceGroupController.getAllEntities);
router.post('/save', priceGroupController.save);
router.post('/toggle', priceGroupController.toggle);
router.post('/delete', priceGroupController.delete);

module.exports = router;