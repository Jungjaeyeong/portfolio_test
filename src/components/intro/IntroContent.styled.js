import styled from "styled-components";

export const IntroContentContainer = styled.div`
  margin: 0 auto;
  padding: 110px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  .point {
    color: #d1570d;
  }
  .intro {
    &-top {
      cursor: pointer;
      font-size: 68px;
      font-weight: 500;
      &:hover {
        opacity: 50%;
      }
    }
  }
`;

export const InputContainer = styled.div`
  .inputbox {
    width: 650px;
    border: solid 0.5px #fefefe;
    padding: 12px 25px;
    border-radius: 50px;
    font-size: 20px;
  }
`;

export const SkillContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  .skillbox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .skillimg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 50px;
    background-color: #35363a;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
