import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import Title from '../Title/Title';
import { SectionLayout } from '../../styles/Layouts';
import Button from "../Button/Button";
import { css, email, mobile, html, js, node, py, react } from "../../utils/Icons";
import Progressbar from '../Progressbar/Progressbar';
import Stats from '../stats/Stats';
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import way from "../../img/chinnarut.png";

const AboutStyled = styled(SectionLayout)`
  background-color: ${props => props.theme.aboutBg};
  position: relative;
  overflow: hidden;

  .stats-container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 5;
    @media screen and (max-width: 1150px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about-image {
      padding: 1.5rem;
      background-color: ${props => props.theme.colorBg3};
      border-radius: 5px;
      width: 80%;
      @media screen and (max-width: 1150px) {
        width: 100%;       
      }

      img {
        width: 100%;
        height: 90%;
      }
    }

    .about-content {
      .progress-bars {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .button-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 2rem;
        @media screen and (max-width: 1150px) {
          margin-bottom: 2rem;
        }
      }
    }
  }

  .shape1 {
    position: absolute;
    left: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }

  .shape2 {
    position: absolute;
    right: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const About = () => {
  const theme = useTheme()

  return (
    <AboutStyled theme={theme} id="about" >
      <div className="about-info">
        <div className="about-image">
          <img src={way} alt="abt-img" />
        </div>
        <div className="about-content">
          <Title name="About Me" />
          <p>
            My name is Chinnarut Tamprateep. I am digital marketing and was working in insurance business for over 17 years. Currently I am doing small online business with healthy products on shelf. 
            <br /> <br />
            I am passionate in coding and programming language, so I designed to be self-taught in coding for 2.5 years. However, even I do not have any experiences in software or application business, I also have experienced in building project which can be define my expertise in programming area.
          </p>
          <div className="progress-bars">
            <Progressbar 
              bg={theme.colorPrimary}
              service={"Full Stack Development"}
              progress={"100"}
            />
            <Progressbar 
              bg={theme.colorPurple}
              service={"Web Application"}
              progress={"100"}
            />
            <Progressbar 
              bg={theme.colorGreen}
              service={"UX / UI Design"}
              progress={"100"}
            />
          </div>
          <div className="button-container">
            <Button 
              name="087-693-2644"
              icon={mobile}
              blob="blob"
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={'600'}
              onClick="onClick"
              bRad={'30px'}
              bPad={theme.bPad1}
            />
            <Button 
              name="chinnarut.t@gmail.com"
              icon={email}
              blob="blob"
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={'600'}
              onClick="onClick"
              bRad={'30px'}
              bPad={theme.bPad1}
            />
          </div>
        </div>
      </div>

      <div className="stats-container">
        <Stats 
          icon={html}
          desc="HTML"
        />
        <Stats 
          icon={css}
          desc="CSS"
        />
        <Stats 
          icon={js}
          desc="Javascript"
        />
        <Stats 
          icon={node}
          desc="NodeJS"
        />
        <Stats 
          icon={react}
          desc="ReactJS"
        />
        <Stats 
          icon={py}
          desc="Python"
        />
      </div>
      <img src={shape1} alt="img-shape1" className="shape1" />
      <img src={shape2} alt="img-shape2" className="shape2" />
    </AboutStyled>
  )
}

export default About
