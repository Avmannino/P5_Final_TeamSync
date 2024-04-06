import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function SportsNav() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi User,</h4>
        <h1>
          Welcome to <span>MY TEAM DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;


  .title {
    display: flex;
    flex-direction: column;

    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }

  .search {
    position: relative;
    top: 40vh;
    left: -65vw;
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;

    svg {
      color: #ffc107;
    }

    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;

      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }

  @media screen and (max-width: 2540px) {
    flex-direction: column;

    .title {
      align-items: center;
      text-align: center;

      h1 {
        margin-top: 1rem;

        span {
          display: block;
          margin-top: 0.5rem;
        }
      }
    }

    .search {
      width: 100%;
    }
  }
`;
