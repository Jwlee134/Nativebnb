import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { getRoomsAPI } from "~/api/room";
import RoomCard from "~/components/RoomCard";
import { useAppSelector } from "~/store";
import { setExplore } from "~/store/rooms";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FakeBar = styled.View`
  height: 40px;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
  margin: 0px 15px;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 15 : 15}px;
`;

const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

const Explore = () => {
  const rooms = useAppSelector(state => state.rooms.explore.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await getRoomsAPI();
        dispatch(setExplore({ page: 1, rooms: data.results }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);

  if (rooms.length === 0) {
    return (
      <Container>
        <ActivityIndicator color="black" size={30} />
      </Container>
    );
  }

  return (
    <>
      <FakeBar>
        <FakeText>Search...</FakeText>
      </FakeBar>
      <FlatList
        data={rooms}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <RoomCard room={item} />}
        style={{ width: "100%", marginTop: 15 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <TouchableOpacity>
            <Text>Load More</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default Explore;
