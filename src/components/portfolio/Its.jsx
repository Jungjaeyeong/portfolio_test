import React from "react";
import { ItsContainer } from "./Its.styled";

const Its = () => {
  return (
    <ItsContainer>
      <img src="images/its.png" alt="its" />
      <div>
        <span className="title">Its </span>
        <span>팀프로젝트</span>
      </div>
    </ItsContainer>
  );
};

export default Its;
