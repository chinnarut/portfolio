import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Experience from "./components/Sections/Experience";
import Portfolios from "./components/Sections/Portfolios";
import Services from "./components/Sections/Services";
import { useTheme } from "./context/themeContext";

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colorBg};
  color: ${props => props.theme.colorWhite};
  position: relative;
  
  p, a, li {
    color: ${props => props.theme.colorGrey1};
  }

  p {
    line-height: 1.9rem;
  }

  footer {
    background-color: ${props => props.theme.colorBg2};
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      a {
        color: ${props => props.theme.colorGreen};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${props => props.theme.colorPrimary};
        }
      }
    }
  }
`;

function App() {
  const theme = useTheme();
  console.log(theme)

  // state
  const [toggle, setToggle] = useState(true);

  return (
    <AppStyled theme={theme} >
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Services />
        <Experience />
        <Portfolios />
        <Contact />
      </main>
      <footer>
        <p>
          Copywright: 2023 <a href="/" >Chinnarut Tamprateep</a> All right reserved.
        </p>
      </footer>
    </AppStyled>
  );
}

export default App;
