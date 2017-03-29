import { models } from '../config/constants'

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
  creatorId: { type: ObjectId, ref: models.user.name },
  keeps: [{ type: ObjectId, ref: models.keep.name }]
})

module.exports = mongoose.model('Vault', schema)