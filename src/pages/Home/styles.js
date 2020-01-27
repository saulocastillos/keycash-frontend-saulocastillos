import styled from 'styled-components';

import { MdFavorite } from 'react-icons/md';

import media from 'styled-media-query';

export const PropertyList = styled.ul`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  list-style: none;
  min-width: 400px;

  li {
    display: flex;
    flex-direction: flex-start;
    flex-grow: 1;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px;
    max-width: 400px;

    img {
      align-self: flex-start;
      max-width: 320px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      margin-top: 10px;
      max-width: 320px;
      justify-content: space-between;
      strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }
      > span {
        font-size: 20px;
        font-weight: bold;
        margin: 5px 0 20px;
      }
    }
  }

  ${media.greaterThan('small')`
    margin: 0 auto 20px;
  `}
`;

export const HeartIcon = styled(MdFavorite)`
  margin-top: -40px;
  margin-left: 10px;

  width: 30px;
  height: 30px;
  color: #e7308a;
`;
