import mongoose from 'mongoose';

const comparisonSchema = new mongoose.Schema({
  shareId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  leftText: {
    type: String,
    required: true
  },
  rightText: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Untitled Comparison'
  },
  language: {
    type: String,
    default: 'text'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 2592000 // Auto-delete after 30 days
  }
}, {
  timestamps: true
});

const Comparison = mongoose.model('Comparison', comparisonSchema);

export default Comparison;
