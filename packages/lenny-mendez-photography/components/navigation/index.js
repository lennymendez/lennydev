import React from "react";
import { P } from "../../lib/typography";

export default () => {
  return (
    <div className="navigation">
      <button type="button" onClick={null}>
        <P>Lenny Mendez Photography</P>
      </button>
      <div
        style={{
          float: "right"
        }}
      >
        <button
          type="button"
          onClick={null}
          style={{
            margin: "0 5pt"
          }}
        >
          <P>HOME</P>
        </button>
        |
        <button
          type="button"
          onClick={null}
          style={{
            margin: "0 5pt"
          }}
        >
          <P>SHOP</P>
        </button>
        |
        <button
          type="button"
          onClick={null}
          style={{
            margin: "0 5pt"
          }}
        >
          <P>PORTFOLIO</P>
        </button>
        |
        <button
          type="button"
          onClick={null}
          style={{
            margin: "0 5pt"
          }}
        >
          <P>ABOUT</P>
        </button>
        |
        <button
          type="button"
          onClick={null}
          style={{
            marginLeft: "10pt"
          }}
        >
          <img
            src="../../static/icons/cart-black.png"
            style={{
              width: "14pt",
              height: "14pt",
              position: "relative",
              top: "3pt"
            }}
          />
        </button>
      </div>
      <style jsx>{`
        button {
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
        .navigation {
          width: calc(100% - 60pt);
          margin-left: 30pt;
          position: absolute;
          top: 36pt;
        }
      `}</style>
    </div>
  );
};
