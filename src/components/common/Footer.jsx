import React, { useMemo } from "react";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  const nowYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <FooterContainer>
      <hr />
      <div className="footer">
        <div className="footer-name">
          <span>
            <span className="point">Jae</span>yeong
          </span>
        </div>
        <div className="footer-info">
          <span>010-3369-8037</span>
          <span>jjy8037@gmail.com</span>
        </div>
        <div>
          <span>Copyright &copy; {nowYear}. Jaeyeong All Rights Reserved.</span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
