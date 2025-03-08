import { Schema, model } from 'mongoose';

const snippetSchema = new Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  language: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Snippet = model('Snippet', snippetSchema);

export default Snippet;
