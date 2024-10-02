import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app_container ${className}`}>
        <SocialMedia />
        <div className="app__wrapper app_flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2020 SUMEDH</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
