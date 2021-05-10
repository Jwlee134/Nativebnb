import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoom } from "~/types";

interface IState {
  explore: {
    page: number;
    rooms: IRoom[];
  };
  saved: IRoom[];
}

const initialState: IState = {
  explore: {
    page: 1,
    rooms: [],
  },
  saved: [],
};

const rooms = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setExplore: (
      state,
      action: PayloadAction<{ rooms: IRoom[]; page: number }>,
    ) => {
      const {
        explore: { rooms: storedRooms, page: storedPage },
      } = state;
      const { rooms: exploreRooms, page } = action.payload;

      exploreRooms.forEach(room => {
        const exist = storedRooms.some(storedRoom => storedRoom.id === room.id);
        if (exist) return;
        storedRooms.push(room);
      });

      state.explore.page = page;
    },
  },
});

export const { setExplore } = rooms.actions;

export default rooms.reducer;
