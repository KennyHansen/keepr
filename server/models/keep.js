import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let schema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  imageUrl: { type: String },
  articleLink: { type: String },
  tags: { type: String },
  isPublic: { type: Boolean, default: true },
  views: { type: Number, default: 0 },
  timesVaulted: { type: Number, default: 0 },
  // Relations
  creatorId: { type: ObjectId, ref: models.user.name, required: true },
})

module.exports = mongoose.model('Keep', schema)