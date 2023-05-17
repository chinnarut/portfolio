import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
import {portfolios as myPortfolios} from "../../data/portfolios";
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { getUnique } from '../../utils/helpers';
import gsap from "gsap";

const PortfoliosStyled = styled(SectionLayout)`
  background: linear-gradient(180deg, #222121, #191919);
  
  .portfolios-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2rem;
  } 

  .filter-buttons {
    margin: 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .filter-button {
      display: inline-block;
      font-family: inherit;
      font-size: inherit;
      font-weight: 600;
      color: ${props => props.theme.colorGrey1};
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease-in-out;
    }
  }

  .active {
    color: ${props => props.theme.colorPrimary} !important;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colorPrimary};
    }
  }
`;

const Portfolios = () => {
  const theme = useTheme();

  //refs
  const portfolioContainer = useRef()

  // state
  const [portfolios, setPortfolios] = useState(myPortfolios);
  const [categories, setCategories] = useState(["All", ...getUnique(portfolios, "category")]);
  const [active, setActive] = useState(0);

  const activeCategory = (index) => {
    setActive(index);
  };

  const filterPortfolios = (category, index) => {
    if(category === "All") {
      gsap.to(portfolioContainer.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
          gsap.fromTo(portfolioContainer.current, {
            y: 20,
            opacity: 0,
            scaleY: 0
          },
          {
            duration: 0.5,
            y: 20,
            opacity: 1,
            scaleY: 1,
            ease: "power4.out"
          })

          setPortfolios(myPortfolios);
        }
      })
      activeCategory(index);

      return
    }

    const filtered = myPortfolios.filter((portfolio) => {
      return portfolio.category === category;
    });

    activeCategory(index);
    gsap.to(portfolioContainer.current, {
      duration: 0.5,
      opacity: 0,
      y: 25,
      ease: 'power4.out',
      onComplete: () => {
          gsap.to(portfolioContainer.current,
          {
              duration: 0.5,
              y: 20,
              opacity: 1,
              ease: 'power4.out',
          })
          
          setPortfolios(filtered);
      }
    })
  };

  return (
    <PortfoliosStyled theme={theme} id="portfolios" >
      <Title 
        name={"Portfolios"}
        desc={"My project that I created."}
      />
      <div className="filter-buttons">
        {
          categories.map((category, index) => {
            return <button 
              key={index} 
              onClick={() => {filterPortfolios(category, index)}}
              className={`filter-button ${active === index ? "active" : ""}`}
            >
            {category}
          </button>
          })
        }
      </div>
      <div className="portfolios-container" ref={portfolioContainer} >
        {portfolios?.map((portfolio) => {
          return <PortfolioItem 
            key={portfolio.id} 
            {...portfolio}
          />
        })}
      </div>
    </PortfoliosStyled>
  )
}

export default Portfolios
