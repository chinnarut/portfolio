import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/Icons';
import TimelineItem from '../TimelineItem/TimelineItem';

const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;

  .timeline {
    background-color: ${props => props.theme.colorBg5};
    padding: 2rem;
    border-radius: 10px;
  }

  .jobs-timeline {
    .icon {
      left: -10px;
    }
  }
`;

const Timeline = () => {
  const theme = useTheme()

  return (
    <TimelineStyled theme={theme} >
      <div className="education-timeline timeline">
        <TimelineItem 
          duration={"2010 - 2012"}
          title={"University of Greenwich, London"}
          desc={"Master Degree, Strategic Marketing"}
          icon={education}
        />
        <TimelineItem 
          duration={"2007 - 2010"}
          title={"Ramkhamhaeng University"}
          desc={"B.B.A Marketing"}
          icon={education}
        />
      </div>
      <div className="jobs-timeline timeline">
        <TimelineItem 
          duration={"2020 - 2023"}
          title={"Online Business & Self-Tought Developer"}
          desc={"HTML, CSS, Javascript, ReactJS and NodeJS"}
          icon={brief}
        />
        <TimelineItem 
          duration={"2015 - 2019"}
          title={"Assistant Vice President, Digital Business"}
          desc={"Tokio Marine Life Insurance (Thailand) PCL."}
          icon={brief}
        />
        <TimelineItem 
          duration={"2012 - 2015"}
          title={"Asistant Vice President, Accident&Health"}
          desc={"Dhipaya Insurance PCL."}
          icon={brief}
        />
      </div>
    </TimelineStyled>
  )
}

export default Timeline
