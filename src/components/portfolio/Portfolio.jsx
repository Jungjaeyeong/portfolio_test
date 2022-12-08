import React from "react";
import { PortfolioContainer } from "./Portfolio.styled";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <img src="images/portfolio.png" alt="portfolio" />
      <div>
        <span className="title">개인 포트폴리오 웹 (1) </span>
        <span>개인프로젝트</span>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
