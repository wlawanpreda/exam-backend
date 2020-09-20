import uuid from 'uuid/v1';

import { ChatRoomModel } from '../../model';

import { pubsub } from '../pubsub';

const NEW_MESSAGE = 'NEW_MESSAGE';

export default {
  Subscription: {
    newMessage: {
      subscribe: () => pubsub.asyncIterator([NEW_MESSAGE]),
    },
  },
  Query: {
    messages: async (parent, { roomName: name }) => {
      const room = await ChatRoomModel.findOne({ name });
      if (!room)
        return { successful: false, msg: `can not find ChatRoom:${name}` };

      return room.get('message') || [];
    },
  },
  Mutation: {
    sendMessage: async (parent, { roomName: name, message: body, user }) => {
      const room = await ChatRoomModel.findOne({ name });
      if (!room)
        return { successful: false, msg: `can not find ChatRoom:${name}` };

      const from = { name: user || '?' }
      const newMessage = { id: uuid(), body, from };
      await room.update({ $push: { message: newMessage } });

      pubsub.publish(NEW_MESSAGE, { newMessage });
      return { successful: true };
    },
  },
};
