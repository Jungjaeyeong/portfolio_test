/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { backSkills, frontSkills } from "../../constant/IntroMenu";
import { BackSkills, FrontSkills, SkillContainer } from "./Skill.styled";

const Skill = () => {
  return (
    <SkillContainer>
      <span>Front-End</span>
      <FrontSkills>
        {frontSkills.map((skills) => (
          <div key={skills.id} className="skillbox">
            <div className="skillimg">
              <img src={skills.icon} />
            </div>
            <span>{skills.name}</span>
          </div>
        ))}
      </FrontSkills>
      <span>Back-End</span>
      <BackSkills>
        {backSkills.map((skills) => (
          <div key={skills.id} className="skillbox">
            <div className="skillimg">
              <img src={skills.icon} />
            </div>
            <span>{skills.name}</span>
          </div>
        ))}
      </BackSkills>
    </SkillContainer>
  );
};

export default Skill;
