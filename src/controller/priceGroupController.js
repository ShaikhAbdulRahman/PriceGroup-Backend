// const PriceGroupService = require("../services/service");

// exports.getAll = async (req, res) => {
//   try {
//     const data = await PriceGroupService.getAllPriceGroups();
//     res.json({ data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getById = async (req, res) => {
//   try {
//     const data = await PriceGroupService.getPriceGroupById(req.params.id);
//     if (!data) return res.status(404).json({ error: "Not Found" });
//     res.json({ data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create new price group
// exports.create = async (req, res) => {
//   try {
//     const data = await PriceGroupService.createPriceGroup(req.body);
//     res.status(201).json({ data });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update existing
// exports.update = async (req, res) => {
//   try {
//     const data = await PriceGroupService.updatePriceGroup(req.params.id, req.body);
//     if (!data) return res.status(404).json({ error: "Not Found" });
//     res.json({ data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Toggle active status
// exports.toggle = async (req, res) => {
//   try {
//     const data = await PriceGroupService.togglePriceGroup(req.params.id);
//     res.json({ data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete price group
// exports.delete = async (req, res) => {
//   try {
//     const data = await PriceGroupService.deletePriceGroup(req.params.id);
//     if (!data) return res.status(404).json({ error: "Not Found" });
//     res.json({ message: "Deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// const express = require('express');
// const router = express.Router();
// const PriceGroup = require('../models/models');
// const { v4: uuidv4 } = require('uuid');

// // Get all price groups
// router.get('/entity', async (req, res) => {
//     try {
//         const priceGroups = await PriceGroup.find();
//         res.json({ data: priceGroups });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Other routes without middleware
// router.post('/search', async (req, res) => {
//     try {
//         const query = { ...req.body };

//         if (query.fromDate && query.toDate) {
//             query.updatedOn = {
//                 $gte: new Date(query.fromDate),
//                 $lte: new Date(query.toDate)
//             };
//             delete query.fromDate;
//             delete query.toDate;
//         }

//         const priceGroups = Object.keys(query).length === 0 
//             ? await PriceGroup.find()
//             : await PriceGroup.find(query);

//         res.json({ data: priceGroups });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// router.post('/save', async (req, res) => {
//     try {
//         let priceGroup = req.body;

//         if (!priceGroup.id || priceGroup.id === '0') {
//             priceGroup.id = uuidv4();
//             priceGroup.createdOn = new Date();
//         }

//         priceGroup.updatedOn = new Date();

//         const existingPriceGroup = await PriceGroup.findOne({ id: priceGroup.id });

//         if (existingPriceGroup) {
//             const result = await PriceGroup.findOneAndUpdate(
//                 { id: priceGroup.id },
//                 priceGroup,
//                 { new: true }
//             );
//             res.json({ data: { id: result.id, message: 'Updated successfully' } });
//         } else {
//             const newPriceGroup = new PriceGroup(priceGroup);
//             const result = await newPriceGroup.save();
//             res.json({ data: { id: result.id, message: 'Saved successfully' } });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// router.post('/toggle', async (req, res) => {
//     try {
//         const priceGroup = await PriceGroup.findOne({ id: req.body.id });

//         if (!priceGroup) {
//             return res.status(404).json({ error: 'Record not found' });
//         }

//         priceGroup.active = !priceGroup.active;
//         priceGroup.updatedOn = new Date();

//         const result = await priceGroup.save();
//         res.json({ data: { id: result.id, message: 'Updated successfully' } });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// router.post('/delete', async (req, res) => {
//     try {
//         const priceGroup = await PriceGroup.findOne({ id: req.body.id });

//         if (!priceGroup) {
//             return res.status(404).json({ error: 'Record not found' });
//         }

//         await PriceGroup.deleteOne({ id: req.body.id });
//         res.json({ data: { id: req.body.id, message: 'Deleted successfully' } });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;

const PriceGroup = require('../models/priceGroup');
const { v4: uuidv4 } = require('uuid');

const priceGroupController = {
    search: async (req, res) => {
        try {
            const result = await PriceGroup.find(req.body.query || {});
            res.json({ data: result });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    getEntity: async (req, res) => {
        try {
            const result = await PriceGroup.findOne({id: req.body.id});
            res.json({ data: result });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    getEntityById: async (req, res) => {
        try {
            const result = await PriceGroup.findOne({id: req.params.id});
            res.json({ data: result });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    getAllEntities: async (req, res) => {
        try {
            const result = await PriceGroup.find({});
            res.json({ data: result });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    save: async (req, res) => {
        try {
            const data = req.body;
            let result;
            
            if (data.id) {
                result = await PriceGroup.findOneAndUpdate(
                    {id: data.id},
                    {
                        ...data,
                        updatedOn: new Date(),
                    },
                    { new: true }
                );
                res.json({ data: { id: result.id, message: 'Updated successfully' } });
            } else {
                const priceGroup = new PriceGroup({
                    id: uuidv4(),
                    ...data,
                    createdOn: new Date()
                });
                result = await priceGroup.save();
                res.json({ data: { id: result.id, message: 'Save successfully' } });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },

    toggle: async (req, res) => {
        try {
            const priceGroup = await PriceGroup.findOne({id: req.body.id});
            if (!priceGroup) {
                throw new Error('Price group not found');
            }

            priceGroup.active = !priceGroup.active;
            priceGroup.updatedOn = new Date();
            const result = await priceGroup.save();
            res.json({ data: { id: result.id, message: 'Save successfully' } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const result = await PriceGroup.findOneAndDelete({id: req.body.id});
            
            if (!result) {
                return res.status(404).json({ error: 'Price group not found' });
            }
            
            res.json({ data: { id: result.id, message: 'Deleted successfully' } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = priceGroupController;