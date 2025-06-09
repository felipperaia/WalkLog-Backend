import { Schema, model, Document } from 'mongoose';

export interface IWalk extends Document {
  date: Date;
  duration: number;
  route: {
    latitude: number;
    longitude: number;
    timestamp: number;
  }[];
  steps: number;
  notes?: string;
  audioNoteUrl?: string;
}

const WalkSchema = new Schema<IWalk>({
  date: { type: Date, default: Date.now },
  duration: { type: Number, required: true },
  route: [
    {
      latitude: Number,
      longitude: Number,
      timestamp: Number
    }
  ],
  steps: { type: Number, required: true },
  notes: String,
  audioNoteUrl: String
});

export default model<IWalk>('Walk', WalkSchema);