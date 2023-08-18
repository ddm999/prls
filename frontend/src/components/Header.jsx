import React from "react";
import { HeaderLogoContainer, MainHeader } from "../styles/headerStyles";

//         <img src="/images/lightspeedlogo.svg" alt="Lightspeed logo"></img>

const Header = () => {
  return (
    <MainHeader>
      <HeaderLogoContainer>
        <h1>ddm's Lightspeed stream</h1>
      </HeaderLogoContainer>
    </MainHeader>
  );
};

export default Header;
