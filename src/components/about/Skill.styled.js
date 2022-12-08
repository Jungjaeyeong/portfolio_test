import styled from "styled-components";

export const SkillContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 140px;
  display: flex;
  flex-direction: column;
  .title {
    width: 60px;
    font-size: 28px;
    font-weight: 500;
    border-bottom: solid 2px #d1570d;
  }
  hr {
    margin-top: 50px;
    width: 900px;
  }
`;
export const FrontSkills = styled.div`
  width: 900px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  img {
    width: 100px;
    height: 100px;
  }
  .skillbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: #35363a;
    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
  .skillimg {
  }
`;

export const BackSkills = styled.div`
  width: 900px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  img {
    width: 100px;
    height: 100px;
  }
  .skillbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: #35363a;
    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
  .skillimg {
  }
`;
