import React from "react";
import AppLayout from "../components/layout/AppLayout";
import Its from "../components/portfolio/Its";
import Portfolio from "../components/portfolio/Portfolio";
import Portfolio2 from "../components/portfolio/Portfolio2";

const portfolio = () => {
  return (
    <AppLayout>
      <Portfolio2 />
      <Portfolio />
      <Its />
    </AppLayout>
  );
};

export default portfolio;
