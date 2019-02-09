import { Colors } from "../../lib/colors";
import { P } from "../../lib/typography";

export const CTA = props => (
  <div
    style={{
      position: "fixed",
      width: "calc(100% - 60pt)",
      bottom: "120pt",
      textAlign: "center",
      opacity: props.activeButton ? "1" : "0",
      transition: props.transitionTime
    }}
  >
    <button
      type="button"
      onClick={props.onClick}
      style={{
        backgroundColor: "transparent",
        border: `1pt solid ${Colors.light}`,
        borderRadius: "3pt",
        padding: "5pt 20pt",
        cursor: "pointer"
      }}
    >
      <P light>{props.children}</P>
    </button>
  </div>
);

export const HorizontalArrow = props => (
  <div
    style={{
      position: "absolute",
      left: props.direction === "right" ? "calc(100% - 70pt)" : "40pt",
      top: "50%",
      opacity: props.activeButton ? "1" : "0",
      transition: props.transitionTime
    }}
  >
    <button
      type="button"
      onClick={props.onClick}
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
      }}
    >
      <img
        src="../../static/icons/horizontalArrow.png"
        style={{
          width: "30pt",
          height: "30pt",
          webkitTransform:
            props.direction === "right" ? "scaleX(-1)" : "scaleX(1)",
          transform: props.direction === "right" ? "scaleX(-1)" : "scaleX(1)"
        }}
      />
    </button>
  </div>
);
