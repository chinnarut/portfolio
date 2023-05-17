import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import { code, design, desktop } from '../../utils/Icons';
import ServiceItem from '../ServiceItem/ServiceItem';
import Title from '../Title/Title';

const ServicesStyled = styled(SectionLayout)`
  background: ${props => props.theme.colorBgGrad};

  .services-container {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
  }
`;

const Services = () => {
  const theme = useTheme()

  return (
    <ServicesStyled theme={theme} id="services" >
      <Title name={"Skills"} desc={"My currently expertise in buliding application."} />
      <div className="services-container">
        <ServiceItem 
          icon={desktop}
          title={"Full Stack Web Application"}
          bg={theme.colorGreen}
          shadow={theme.shadowGreen} 
        />
        <ServiceItem 
          icon={design}
          title={"Web Design (UX / UI)"}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}  
        />
        <ServiceItem 
          icon={code}
          title={"API"}
          bg={theme.colorPrimary}
          shadow={theme.shadowPrimary}
        />
      </div>
    </ServicesStyled>
  )
}

export default Services
