import styled from "styled-components";
import { ReactComponent } from "../../assets/svg/github.svg";

export const IntroHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 50px 0px 50px;
  .point {
    color: #d1570d;
  }
  a {
    text-decoration: none;
    transition: all 250ms ease;
    color: #fefefe;
    font-size: 20px;
    font-weight: 700;
    &:hover {
      opacity: 50%;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    transition: all 250ms ease;
    color: #fefefe;
    font-weight: 500;

    &.active {
    }

    &:hover {
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 5px;
    &:hover {
      opacity: 50%;
      cursor: pointer;
    }
  }
`;

export const GithubIcon = styled(ReactComponent)`
  cursor: pointer;
  width: 55px;
  height: 55px;

  &:hover {
    opacity: 50%;
    transition: 200ms;
    .cls-1 {
    }
  }

  .cls-1 {
  }
`;
