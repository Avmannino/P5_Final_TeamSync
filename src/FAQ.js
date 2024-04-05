import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";

export default function FAQ() {
    const faqs = [
        {
            icon: <AiFillCalendar />,
            text: "How to manage time and get good marks for trips",
        },
        {
            icon: <MdTimelapse />,
            text: "How to regulate transactions over time",
        },
        {
            icon: <IoMdCash />,
            text: "Withdrawing money through an ATM",
        },
    ];

    return (
        <Section>
            <div className="title">
                <h2>Information for drivers</h2>
            </div>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div className="faq" key={index}>
                        <div className="info">
                            {faq.icon}
                            <h4>{faq.text}</h4>
                        </div>
                        <IoIosArrowForward />
                    </div>
                ))}
            </div>
        </Section>
    );
}

const Section = styled.section`
  ${cardStyles};

  position: absolute;
  top: 40vh;
  left: 19vw;
  
  .title {
    h2 {
      color: #ffc107;
      font-family: "Cabin";
      letter-spacing: 0.3rem;
    }
  }

  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      svg {
        font-size: 1.4rem;
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 2560px) {
    .faq svg {
      font-size: 2rem;
    }
  }
`;
