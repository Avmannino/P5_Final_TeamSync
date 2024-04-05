import React from "react";
import styled from "styled-components";
import llamas from "./assets/llamas_logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={llamas} alt="" />
      </div>
      <div className="title">
        <h3>The Las Vegas Llamas</h3>
        <h5>
          <HiOutlineLocationMarker /> Las Vegas, Nevada
        </h5>
        <h4>2023 Record: 56-76</h4>
      </div>
      <div className="info">
        <div className="container">
        </div>
        <div className="container">
        </div>
        <div className="container">
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  position: absolute;
  top: -2vh;
  left: 15vw;
 
  align-items: center;
  gap: 1rem;
  .image {
    width: 30%; /* Ensures the image spans the container */
    max-height: 10rem;
    overflow: hidden;
    border-radius: 50%; /* Adjusted border-radius for a circular shape */
    img {
      width: 100%; /* Ensures the image spans the container */
      height: auto; /* Allows the image to adjust its height proportionally */
      object-fit: cover;
      border-radius: 50%; /* Adjusted border-radius for a circular shape */
      transition: transform 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    h3,
    h4,
    h5 {
      color: #00000;
      font-family: "Cabin;
      font-size: 4rem;
      letter-spacing: 0.2rem;
      padding-left: 40px;
    }
    h5,
    h4,
    h3 {
        text-align: center;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
    p {
        padding-top: 2%;
    }
  }
  .info {
    display: flex;
    justify-content: center; /* Centers the info containers horizontally */
    gap: 1rem;
    .container {
      text-align: right;
    }
  }
`;
