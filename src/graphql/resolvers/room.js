import { ChatRoomModel } from '../../model';

export default {
  Mutation: {
    createRoom: async (parent, { roomName: name }) => {
      const room = await ChatRoomModel.findOne({ name });
      if (room) return { successful: false, msg: `already ChatRoom:${name}` };

      await ChatRoomModel.create({ name });
      return { successful: true };
    },
  },
};
