import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import { code, design, desktop } from '../../utils/Icons';
import ServiceItem from '../ServiceItem/ServiceItem';
import Title from '../Title/Title';
import blogs from "../../data/blogs";
import BlogItem from '../BlogItem/BlogItem';

const BlogsStyled = styled(SectionLayout)`
  background-color: ${props => props.theme.colorBg5};
  padding-bottom: 360px;
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3.5rem;
  }
`;

const Blogs = () => {
  const theme = useTheme()

  return (
    <BlogsStyled theme={theme} id="blogs" >
      <div className="center-title">
        <Title name={"Latest News"} desc={"Lorem ipsum dolor dit amet consectetesid"} />
      </div>
      <div className="blogs-container">
        {
          blogs.map((blog) => (
            <BlogItem {...blog} />
          ))
        }
      </div>
    </BlogsStyled>
  )
}

export default Blogs
