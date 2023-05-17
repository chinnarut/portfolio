import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { arrow } from '../../utils/Icons';

const BlogItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .blog-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .date {
    padding: 0.1rem 0.6rem;
    background-color: ${props => props.theme.colorGrey};
    align-self: flex-start;
    margin: 1rem 0;
  }

  h4 {
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  }

  button {
    text-transform: uppercase;
    margin-top: 1.8rem;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    background-color: transparent;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    color: inherit;
    cursor: pointer;
    gap: 1rem;

    i {
      transition: transform 0.2s ease-in-out;
    }
    &:hover {
      color: ${props => props.theme.colorYellow};

      i {
        transform: translateX(3px);
      }
    }
  }
`;

const BlogItem = ({title, title2, desc, desc2, date, image1, write, userIcon, image2}) => {
  const theme = useTheme()

  return (
    <BlogItemStyled theme={theme} >
      <img src={image1} alt="" className="blog-image" />
      <p className="date">{date}</p>
      <h4>{title}</h4>
      <button >
        {arrow} post details
      </button>
    </BlogItemStyled>
  )
}

export default BlogItem
