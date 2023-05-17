import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import Timeline from '../Timeline/Timeline';
import Title from '../Title/Title';

const ExperienceStyled = styled(SectionLayout)`
  .timeline-container {
    margin-top: 3.5rem;
  }  
`;

const Experience = () => {
  const theme = useTheme()

  return (
    <ExperienceStyled theme={theme} id="experience" >
      <Title name={"Experience"} desc={""} />
      <div className="timeline-container">
        <Timeline />
      </div>
    </ExperienceStyled>
  )
}

export default Experience
