import React from "react";
import { IntroduceContainer } from "./Introduce.styled";

function Introduce() {
  return (
    <IntroduceContainer>
      <span className="title">INTRODUCE</span>
      <div className="intro">
        <p>안녕하세요 </p>
        <p>
          <span className="point">프론트엔드</span> 개발자
        </p>
        <p>정재영입니다.</p>
      </div>
      <div className="content1">
        <span className="content1-title">프론트엔드 개발자를 선택한 이유</span>
        <div className="content1-info">
          <span>
            저는 학교 과제를 통해 웹 디자인과 디자인했던 화면을 html로 코드
            작성을 했던 경험이 있었습니다.
          </span>
          <span>
            전역 후 진로를 고민하던 중에 친구의 추천으로 프론트엔드 개발자에
            대해 알게 되었고
          </span>
          <span>
            전에 했던 그 과정들이 재밌었던 기억이 있어서 흥미를 가지고 공부를
            시작하게 되었으며,
          </span>
          <span>
            꾸준히 좋은 프론트엔드 개발자가 되기 위해 공부하고 있습니다.
          </span>
        </div>
      </div>
      <div className="content2">
        <span className="content2-title">
          제가 생각하는 프론트엔드 개발자에게 필요한 역량 3가지
        </span>
        <div className="content2-info">
          <span>
            <span className="point">첫째.</span> 사용자의 경험을 중요시해야 하며
            유지보수 가능한 코드를 작성하는 능력입니다.
          </span>
          <span>
            <span className="point">둘째.</span> 동료들의 신뢰를 얻을 수 있는
            태도와 기획, 디자인, 백엔드 등 <br />
            다른 팀원들과의 원활한 의사소통 능력입니다.
          </span>
          <span>
            <span className="point">셋째.</span> 더 나은 개발자가 되기 위해서는
            변화에 빠르게 적응하고 꾸준히 공부를 이어나가야 하며,
            <br /> 개발 자체를 좋아하고 즐길 줄 알아야 한다고 생각합니다.
          </span>
        </div>
      </div>
      <hr />
    </IntroduceContainer>
  );
}

export default Introduce;
