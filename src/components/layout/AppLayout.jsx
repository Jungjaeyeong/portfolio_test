import React from "react";
import { Link, useLocation } from "react-router-dom";
import { intromenus } from "../../constant/IntroMenu";
import Footer from "../common/Footer";
import { AppLayoutContainer, InputContainer } from "./AppLayout.styled";

const AppLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <AppLayoutContainer>
      <div className="logo">
        <Link to="/">
          <span className="point">Jae</span>yeong
        </Link>
        <InputContainer>
          <div className="inputbox">
            <span>안녕하세요 성장하는 FE개발자 정재영 입니다!</span>
          </div>
        </InputContainer>
      </div>
      <div className="menu">
        {intromenus.map(({ to, name }) => (
          <Link
            key={name}
            to={to}
            className={pathname.includes(to) ? "active" : ""}
          >
            {name}
          </Link>
        ))}
      </div>
      <hr />
      {children}
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
