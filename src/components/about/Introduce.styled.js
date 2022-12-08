import styled from "styled-components";

export const IntroduceContainer = styled.div`
  margin-top: 50px;
  padding-left: 140px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .title {
    width: 120px;
    font-size: 28px;
    font-weight: 500;
    border-bottom: solid 2px #d1570d;
  }
  .intro {
    font-size: 36px;
    font-weight: 700;
  }
  .content1 {
    background-color: #35363a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 900px;
    &-title {
      font-size: 24px;
      font-weight: 500;
    }
    &-info {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  .content2 {
    background-color: #35363a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 900px;
    &-title {
      font-size: 24px;
      font-weight: 500;
    }
    &-info {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .point {
    color: #d1570d;
  }
  hr {
    margin-top: 50px;
    width: 900px;
  }
`;
