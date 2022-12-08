/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { introSkills } from "../../constant/IntroMenu";
import {
  InputContainer,
  IntroContentContainer,
  SkillContainer,
} from "./IntroContent.styled";

const IntroContent = () => {
  return (
    <IntroContentContainer>
      <div className="intro-top">
        <span>
          <span className="point">Jae</span>yeong
        </span>
      </div>
      <InputContainer>
        <div className="inputbox">
          <span>안녕하세요 성장하는 FE개발자 정재영 입니다!</span>
        </div>
      </InputContainer>
      <SkillContainer>
        {introSkills.map((skills) => (
          <div key={skills.id} className="skillbox">
            <div className="skillimg">
              <img src={skills.icon} />
            </div>
            <span>{skills.name}</span>
          </div>
        ))}
      </SkillContainer>
    </IntroContentContainer>
  );
};

export default IntroContent;
