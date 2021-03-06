import styled from "styled-components";
import theme from "../styles/theme";
/*
 *
 background: ${props => props.background || theme.color.primary};
    background-size: cover;
    background-position: center;
    */
export const StyledScreenRanking = styled.section`
  .layout {
    padding-top: 0;
    background-color: #fdfdfd;
    color: #666c71;
    padding-bottom: 80px;
  }
  main {
    padding-top: 240px;
    padding-bottom: 100px;
  }

  ._inner {
    flex: 1;
    background-color: ${props => theme.color.bg};
    color: ${props => theme.color.gray};
  }

  ._inner > p {
    margin-top: 60px;
  }

  .super {
    max-width: 782px;
    margin: 0 auto;
    b {
      font-weight: 600;
    }
  }

  p.super {
    font-weight: 300;
  }

  .month {
    color: ${props => theme.color.secondary};
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    main {
      padding-top: 160px;
      padding-bottom: 60px;
    }

    ._inner > p {
      margin-top: 30px;
    }
  }
`;

export const StyledRectangle = styled.div`
  background: ${props =>
    props.active ? theme.color.primary : theme.color.white};
  font-size: ${props => theme.spacing.unit * 2.5}px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-height: 100px;
  padding: 40px 0;
  cursor: pointer;
  flex: 1;
  p {
    line-height: 100%;
    display: inline-block;
    color: ${props => (props.active ? theme.color.white : theme.color.gray)};
    font-weight: 600;
  }
  p:after {
    background: none repeat scroll 0 0 #fff;
    content: "";
    display: block;
    height: ${props => theme.spacing.unit * 0.25}px;
    position: relative;
    width: ${props => theme.spacing.unit * 3.75}px;
  }
`;

export const StyledRectangleGroup = styled.div`
  margin: 0 172px;
  display: flex;
  flex: 1;

  div:first-child {
    border-radius: 100px 0 0 100px;
  }

  div:last-child {
    border-radius: 0 100px 100px 0;
  }
  /* &:first-child {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &:last-child {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  } */
`;
