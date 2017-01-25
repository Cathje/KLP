import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const methodSchema = new Schema({
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  isDigital: { type: 'Boolean', required: true },
  isOffline: { type: 'Boolean', required: true },
  minPrice: { type: 'Number', required: false },
  maxPrice: { type: 'Number', required: false },
  minAge: { type: 'Number', required: false },
  maxAge: { type: 'Number', required: false },
  medium: { type: 'String', required: false },
  type: { type: 'String', required: false },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateUpdated: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('method', methodSchema);
