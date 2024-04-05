import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { cardStyles } from "./ReusableStyles";

const data = [
    { data: .290, },
    { data: .260, },
    { data: .280, },
    { data: .260, },
    { data: .240, },
    { data: .200, },
    { data: .270, },
    { data: .290, },
    { data: .190, },
    { data: .200, },
    { data: .230, },
    { data: .230, },
    { data: .240, },
    { data: .245, },
    { data: .250, },
    { data: .180, },
    { data: .160, },
    { data: .160, },
    { data: .164, },
    { data: .151, },
    { data: .129, },
    { data: .120, },
    { data: .125, },
    { data: .115, },
    { data: .100, },
];

export default function Earnings() {
    return (
        <Section>
            <div className="top">
                <div className="info">
                    <h5>Team On-base Percentage (OBP) - 2023</h5>
                    <div className="growth">
                        <span>OVERALL: 0.202%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 0, right: 30, left: 20, bottom: 15 }}
                    >
                        <XAxis dataKey="name" label={{ value: '2023 Season', position: 'insideBottom', offset: 0.5 }} />
                        <YAxis label={{ value: 'OBP (%)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip cursor={false} />
                        <Area
                            type="monotone"
                            dataKey="data"
                            stroke="#ffc107"
                            fill="#8068233e"
                            strokeWidth={4}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Section>
    );
}

const Section = styled.section`
  display: flex;
  position: relative;
  top: 67.5vh;
  left: 2vw;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  min-width: 100rem;
  ${cardStyles}
  padding: 2.5rem 0 0 0;
  
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2.3rem; /* Increased font size for better visibility */
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.9rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  
  .chart {
    height: 95%; /* Adjusted height of chart container */
  }
  
  /* Media query for screens wider than 2560px */
  @media screen and (min-width: 2560px) {
    .top {
      .info {
        h5 {
          font-size: 1.5rem; /* Reduced font size for better proportion */
        }
      }
    }
  }
`;
