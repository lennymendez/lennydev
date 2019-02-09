import { H1, P } from "../../lib/typography";

const Title = props => (
  <div
    style={{
      position: "absolute",
      top: "160pt",
      textAlign: "center",
      width: "calc(100% - 60pt)",
      opacity: props.activeElement ? "1" : "0",
      transition: props.transitionTime
    }}
  >
    <H1 light>{props.title}</H1>
    <P
      light
      style={{
        fontSize: "2rem",
        lineHeight: "2.25rem",
        fontWeight: "100"
      }}
    >
      {props.subtitle}
    </P>
  </div>
);

export default Title;
