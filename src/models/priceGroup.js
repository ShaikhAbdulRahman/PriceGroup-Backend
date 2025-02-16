const mongoose = require('mongoose');

const priceGroupSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  nameLang: {
    type: Map,
    of: String,
    required: false
  },
  active: {
    type: Boolean,
    default: true
  },
  shortDescription: {
    type: Map,
    of: String
  },
  createdBy: {
    type: String,
    required: false
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: String,
    required: false
  },
  updatedOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PriceGroup', priceGroupSchema);