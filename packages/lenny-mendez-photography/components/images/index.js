export const LargeImg = props => (
  <img
    src={props.imgUrl}
    style={{
      width: props.activeContainer ? "100%" : "98%",
      height: props.activeContainer ? "100%" : "98%",
      objectFit: "cover",
      borderRadius: "3pt",
      boxShadow: `grey 0px 20px 10px ${
        props.activeContainer ? "-10pt" : "-20pt"
      }`,
      position: "relative",
      left: props.activeContainer ? "0" : "1%",
      top: props.activeContainer ? "0" : "1%",
      opacity: props.activeContainer ? "1" : "0",
      transition: props.transitionTime,
      backgroundColor: "transparent"
    }}
  />
);

export const LargeImgOverlay = props => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "black",
      top: "60pt",
      textAlign: "center",
      width: "calc(100% - 60pt)",
      height: "calc(100% - 120pt)",
      borderRadius: "3pt",
      opacity: props.activeElement ? "0.2" : "0",
      transition: props.transitionTime
    }}
  />
);
