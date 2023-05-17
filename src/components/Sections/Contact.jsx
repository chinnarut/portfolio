import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
import map from "../../img/map.png";

const ContactStyled = styled(SectionLayout)`
  position: relative;

  .subscribe-container {
    position: absolute;
    top: -240px;
    left: 0;
    width: 100%;
    padding-right: 18rem;
  }

  .contact-info {
    display: flex;
    gap: 2rem;
    margin-top: 3.5rem;
    @media screen and (max-width: 973px) {
      flex-direction: column;
    }

    .map-section {
      width: 40%;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        opacity: 0.1;
      }
    }

    .form-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      .input-control {
        display: flex;
        gap: 1rem;

        input, textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          font-size: inherit;
          outline: none;
          border: none;
          font-family: inherit;
          resize: none;
        }
      }
    }
  }
`;

const Contact = () => {
  const theme = useTheme()

  return (
    <ContactStyled theme={theme} id="contact" >
      <Title name={"Lets Talk"} desc={""} />
      <div className="contact-info">
        <div className="map-section">
          <img src={map} alt="" />
        </div>
        <form action="" className="form-section" >
          <div className="input-control">
            <input type="text" placeholder="Chinnarut Tamprateep" />
            <input type="email" placeholder="Chinnarut.t@gmail.com" />
          </div>
          <div className="input-control">
            <textarea name="" id="" cols="30" rows="6" placeholder="Please contact me by Mobile: 087-693-2644" ></textarea>
          </div>
        </form>
      </div>
    </ContactStyled>
  )
}

export default Contact
