import { model, Schema } from "mongoose";

const sender = new Schema({
  name: String,
});

const message = new Schema({
  name: String,
  id: String,
  body: String,
  // image: String,
  from: sender,
});

export const chatRoomSchema = new Schema({
  name: String,
  message: [message],
});


