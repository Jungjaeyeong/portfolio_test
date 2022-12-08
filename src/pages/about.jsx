import React from "react";
import Introduce from "../components/about/Introduce";

import Skill from "../components/about/Skill";
import AppLayout from "../components/layout/AppLayout";

const About = () => {
  return (
    <AppLayout>
      <Introduce />
      <Skill />
    </AppLayout>
  );
};

export default About;
