import React from "react";

export default () => {
  return (
    <div className="footer">
      <button
        type="button"
        onClick={() =>
          window.open("https://www.instagram.com/_lennydev/", "_blank")
        }
        style={{
          border: "none",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "30pt",
          right: "30pt"
        }}
      >
        <img
          src="../../static/icons/ig.png"
          style={{
            width: "15pt",
            height: "15pt"
          }}
        />
      </button>
      <button
        id="arrow-down"
        type="button"
        onClick={null}
        style={{
          border: "none",
          backgroundColor: "transparent",
          position: "relative",
          top: "20pt"
        }}
      >
        <img
          src="../../static/icons/arrow.png"
          style={{
            width: "15pt",
            height: "15pt"
          }}
        />
      </button>
      <style jsx>{`
        .footer {
          width: 100%;
          text-align: center;
        }
        /* Scroll indicator animation */
        #arrow-down {
          -webkit-animation: arrowAnim 5s infinite; /* Chrome, Safari, Opera */
          animation: arrowAnim 5s infinite;
          -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
        }
        /* Chrome, Safari, Opera */
        @-webkit-keyframes arrowAnim {
          0% {
            top: 15pt;
          }
          50% {
            top: 20pt;
          }
          100% {
            top: 15pt;
          }
        }
        /* Standard syntax */
        @keyframes arrowAnim {
          0% {
            top: 15pt;
          }
          50% {
            top: 20pt;
          }
          100% {
            top: 15pt;
          }
        }
      `}</style>
    </div>
  );
};
