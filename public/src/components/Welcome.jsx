import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.png";

export default function Welcome({ currentUser }) {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   async function fetchUserName() {
  //     setUserName(
  //       await JSON.parse(
  //         localStorage.getItem(localStorage.getItem("chat-app-user"))
  //       ).username
  //     );
  //   }
  //   fetchUserName();
  // }, []);
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}</span> !
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #0d0d30;
  }
`;
