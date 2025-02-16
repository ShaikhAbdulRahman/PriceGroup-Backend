// const PriceGroup = require("../models/models");

// // Get all price groups
// exports.getAllPriceGroups = async () => {
//   return await PriceGroup.find();
// };

// // Get a single price group by ID
// exports.getPriceGroupById = async (id) => {
//   return await PriceGroup.findById(id);
// };

// // Create a new price group
// exports.createPriceGroup = async (data) => {
//   const newPriceGroup = new PriceGroup(data);
//   return await newPriceGroup.save();
// };

// // Update an existing price group
// exports.updatePriceGroup = async (id, data) => {
//   return await PriceGroup.findByIdAndUpdate(id, data, { new: true });
// };

// // Toggle active status
// exports.togglePriceGroup = async (id) => {
//   const priceGroup = await PriceGroup.findById(id);
//   if (!priceGroup) throw new Error("Price group not found");

//   priceGroup.active = !priceGroup.active;
//   priceGroup.updatedOn = new Date();
//   return await priceGroup.save();
// };

// // Delete a price group
// exports.deletePriceGroup = async (id) => {
//   return await PriceGroup.findByIdAndDelete(id);
// };
