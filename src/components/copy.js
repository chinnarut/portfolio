import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

const HeaderStyled = styled.header`
    
`;

const Header = () => {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme} >
      header
    </HeaderStyled>
  )
}

export default Header
