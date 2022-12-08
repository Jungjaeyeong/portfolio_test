import React from "react";
import { Link, useLocation } from "react-router-dom";
import { intromenus } from "../../constant/IntroMenu";
import {
  GithubIcon,
  Icon,
  IntroHeaderContainer,
  Menu,
} from "./IntroHeader.styled";

const IntroHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <IntroHeaderContainer>
        <Link to="/">
          <span className="point">Jae</span>yeong
        </Link>
        <Menu>
          {intromenus.map(({ to, name }) => (
            <Link
              key={name}
              to={to}
              className={pathname.includes(to) ? "active" : ""}
            >
              {name}
            </Link>
          ))}
        </Menu>
        <Icon>
          <a
            href="https://github.com/Jungjaeyeong"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon width="45" height="45" />
          </a>
          <img
            src="https://avatars.githubusercontent.com/u/103166212?v=4"
            alt="github profile img"
          />
        </Icon>
      </IntroHeaderContainer>
      <hr />
    </>
  );
};

export default IntroHeader;
