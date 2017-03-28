let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  // Relations
  userId: { type: ObjectId, ref: models.user.name, required: true },
  keeps: [{ type: ObjectId, ref: models.keep.name }]
})

module.exports = mongoose.model('Vault', schema)