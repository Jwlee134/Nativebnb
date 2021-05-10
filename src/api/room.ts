import { IRoom } from "~/types";
import { api } from ".";

interface IGetRoomsAPI {
  count: number;
  next: null;
  previous: null;
  results: IRoom[];
}

export const getRoomsAPI = (page = 1) =>
  api.get<IGetRoomsAPI>(`/rooms?page=${page}`);
