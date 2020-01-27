import styled from 'styled-components';

import { MdFavorite } from 'react-icons/md';

import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
  min-width: 350px;

  img {
    width: 200px;
  }

  ${media.greaterThan('medium')`

    margin: 50px 50px;
    img {
      width: 300px;
    }
  `}
`;

export const Favorite = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 5px;

    strong {
      display: block;
      color: #000;
    }

    span {
      font-size: 10px;
      color: #010101;
    }
  }

  ${media.greaterThan('small')`
    div {
      margin-right: 10px;

      span {
        font-size: 10px;
        color: #010101;
      }
    }
  `}
`;

export const HeartIcon = styled(MdFavorite)`
  width: 40px;
  height: 40px;
  color: #e7308a;

  ${media.greaterThan('small')`
    width: 60px;
    height: 60px;
  `}
`;
