import styled from "styled-components";

export const FooterContainer = styled.div`
  .point {
    color: #d1570d;
  }
  .footer {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    &-name {
      font-size: 20px;
    }
    &-info {
      display: flex;
      gap: 20px;
    }
  }
`;
