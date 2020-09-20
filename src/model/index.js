require('dotenv').config();
import mongoose from "mongoose";
import { chatRoomSchema } from "./chatRoom";

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true});

export const ChatRoomModel = mongoose.model('ChatRoom', chatRoomSchema);