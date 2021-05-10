import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import { IRoom } from "~/types";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const PhotoContainer = styled.View`
  width: 100%;
  height: ${height / 3.5}px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

const Name = styled.Text`
  font-size: 20px;
  margin-bottom: 7px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const Price = styled.Text``;

const PriceNumber = styled.Text`
  font-weight: bold;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

const RoomCard = ({ room }: { room: IRoom }) => (
  <Container>
    <PhotoContainer>
      <Swiper
        paginationStyle={{ marginBottom: -15 }}
        dotColor="gray"
        activeDotColor="white">
        <Photo
          resizeMode="cover"
          source={require("~/assets/images/photo1.jpg")}
        />
        <Photo
          resizeMode="cover"
          source={require("~/assets/images/photo2.jpg")}
        />
        <Photo
          resizeMode="cover"
          source={require("~/assets/images/photo3.jpg")}
        />
        <Photo
          resizeMode="cover"
          source={require("~/assets/images/photo4.jpg")}
        />
      </Swiper>
    </PhotoContainer>
    {room.user.superhost && (
      <Superhost>
        <SuperhostText>Superhost</SuperhostText>
      </Superhost>
    )}
    <Name>{room.name}</Name>
    <PriceContainer>
      <PriceNumber>${room.price}</PriceNumber>
      <Price> / night</Price>
    </PriceContainer>
  </Container>
);

export default RoomCard;
