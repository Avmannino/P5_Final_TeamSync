import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import FAQ from "./FAQ";
import Profile from "./Profile";
import Transfers from "./Transfers";
import scrollreveal from "scrollreveal";
import './Dashboard.css';

export default function Dashboard() {
    useEffect(() => {
        const sr = scrollreveal({
            origin: "bottom",
            distance: "80px",
            duration: 1000,
            reset: false,
        });
        sr.reveal(
            `
        nav,
        .row__one,
        .row__two
    `,
            {
                opacity: 0,
                interval: 100,
            }
        );
    }, []);
    return (
        <Section>
            <div className="grid">
                <div className="row__one">
                    <Profile />
                    <FAQ />
                </div>
                <div className="row__two">
                    <Analytics />   
                    <Earnings />
                    <Transfers />
                    
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  @media screen and (min-width: 2560px) {
    .grid {
      margin-left: calc((100vw - 2560px) / 2);
      max-width: 2560px;
    }
  }
`;
