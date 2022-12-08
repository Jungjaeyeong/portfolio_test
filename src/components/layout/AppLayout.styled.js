import styled from "styled-components";

export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  .point {
    color: #d1570d;
  }
  .logo {
    padding: 30px 0 20px 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      color: #fefefe;
      font-size: 28px;
      font-weight: 700;
      text-decoration: none;
      transition: all 250ms ease;
      &:hover {
        opacity: 50%;
      }
    }
  }
  .menu {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    padding-left: 150px;
    a {
      color: #fefefe;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
      transition: all 250ms ease;
      &.active {
        color: #d1570d;
        border-bottom: solid 2px #d1570d;
      }
      &:hover {
        opacity: 50%;
      }
    }
  }
`;
export const InputContainer = styled.div`
  .inputbox {
    width: 550px;
    background-color: #35363a;
    padding: 12px 25px;
    border-radius: 50px;
    font-size: 18px;
  }
`;
