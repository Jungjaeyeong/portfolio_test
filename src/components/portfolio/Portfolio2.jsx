import React from "react";
import { Portfolio2Container } from "./Portfolio2.styled";

const Portfolio2 = () => {
  return (
    <Portfolio2Container>
      <img src="images/portfolio2.png" alt="portfolo2" />
      <div>
        <span className="title">개인 포트폴리오 웹 (2) </span>
        <span>개인프로젝트</span>
      </div>
    </Portfolio2Container>
  );
};

export default Portfolio2;
