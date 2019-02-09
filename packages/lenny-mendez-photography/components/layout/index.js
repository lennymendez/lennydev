import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = props => {
  const Pattern = "../../static/pattern/paper02.png";
  return (
    <div className="layout">
      <Header />
      <div
        src="../../static/pattern/paper02.png"
        style={{
          backgroundImage: "url(" + Pattern + ")",
          backgroundRepeat: "repeat",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          opacity: "0.6",
          zIndex: "-1"
        }}
      />
      <div className="children">{props.children}</div>
      <Footer />
      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
        .layout {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
        }
        .children {
          height: calc(100% - 120pt);
          width: calc(100% - 60pt);
          margin-top: 60pt;
          margin-left: 30pt;
          background-color: transparent;
          border-radius: 3pt;
        }
      `}</style>
    </div>
  );
};

export default Layout;
