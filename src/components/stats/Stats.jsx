import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

const StatsStyled = styled.div`
  position: relative;
  z-index: 5;
  border-radius: 10px;
  
  .inner-container {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 1rem;
    position: relative;
    background-color: ${props => props.theme.colorBg4};
    padding: 1.5rem;
    border-radius: 10px;
    margin: 3px 3px 0;

    .icon-container {
      i {
        font-size: 3rem;
        color: ${props => props.theme.colorGrey1};
      }
    }

    .text-container {
      h4 {
        font-size: clamp(1.5rem, 2.5vw, 2.5rem);
      }
      
      p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        margin-top: 0.5rem;
      }
    }
  }
`;

const Stats = ({icon, number, desc}) => {
  const theme = useTheme();
  const cardColors = [theme.colorPrimary, theme.colorPurple, theme.colorGreen, theme.colorYellow];

  const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];

  return (
    <StatsStyled 
      theme={theme} 
      style={{background: `linear-gradient(180deg, ${randomColor}, rgba(31, 39, 28,0.6) 68%)`}}
    >
      <div className="inner-container">
        <div className="icon-container">
            {icon}
        </div>
        <div className="text-container">
            <p>{desc}</p>
        </div>
      </div>
    </StatsStyled>
  )
}

export default Stats
