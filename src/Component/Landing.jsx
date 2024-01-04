import React from "react";

import Freelance from "./Freelance/Freelance";

import Details from "./Details";

import Action from "./Action/Action";
import Client from "./ClientLogo/Client";
import Anand from "./Banner/Anand";
import Story2 from "./Story/Story2";
import Banner from "./Banner/Banner";
import Line from "./Line";

const Landing = () => {
  return (
    <div>
      <Banner />
      <Line />
      <Freelance />
      <Line />
      <Story2 />
      <Line />
      <Details />
      <Line />
      <Action />
      <Line />
      <Client />
      <Line />
    </div>
  );
};

export default Landing;
