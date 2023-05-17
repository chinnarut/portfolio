import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

const ProgressbarStyled = styled.div`
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }    

  .progress-container {
    height: 0.5rem;
    width: 100%;
    border-radius: 15px;
    background-color: ${props => props.theme.colorGrey2};

    .progress {
      height: 100%;
      border-radius: 15px;
    }
  }
`;

const Progressbar = ({service, progress, bg}) => {
  const theme = useTheme()

  return (
    <ProgressbarStyled theme={theme} >
      <div className="text">
        <h5>{service}</h5>
        <p>{progress}%</p>
      </div>
      <div className="progress-container">
        <div className="progress" style={{width: progress + "%", background: bg}} ></div>
      </div>
    </ProgressbarStyled>
  )
}

export default Progressbar
