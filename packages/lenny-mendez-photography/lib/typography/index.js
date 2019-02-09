<style jsx>
  {`
    /* mobile */
    html {
      font-size: 16px;
      line-height: 20px;
    }
    body {
      margin: 0;
      padding: 0;
    }
    h1,
    h2,
    h3,
    h4 {
      font-family: mr-eaves-modern, sans-serif;
      font-weight: 400;
      font-style: normal;
      color: black;
      margin: 0;
    }
    h1 {
      font-size: 1.75rem;
      line-height: 2.5rem;
    }
    h2 {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
    h3 {
      font-size: 1.125rem;
      line-height: 1.25rem;
    }
    h4 {
      font-size: 1rem;
      line-height: 1.25rem;
    }
    p {
      font-family: mr-eaves-modern, sans-serif;
      font-weight: 400;
      font-style: normal;
      color: black;
      font-size: 1rem;
      line-height: 1.25rem;
      margin: 0;
    }
    small {
      font-size: 0.65rem;
    }
    /* prop types */
    .light {
      color: #ffffff;
    }
    .orange {
      color: #f75137;
    }
    .grey {
      color: #606060;
    }
    /* media queries */
    /* from tablets to big screens */
    @media screen and (min-width: 736px) {
      html {
        font-size: 12pt;
        line-height: 14pt;
      }
      h1 {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  `}
</style>;

export const H1 = props => {
  let className = "";
  if (props.light) {
    className += "light";
  }
  if (props.grape) {
    className += "grape";
  }
  return (
    <h1 className={className} style={props.style}>
      {props.children}
    </h1>
  );
};

export const H2 = props => {
  let className = "";
  if (props.light) {
    className += "light";
  }
  if (props.grape) {
    className += "grape";
  }
  return (
    <h2 className={className} style={props.style}>
      {props.children}
    </h2>
  );
};

export const H3 = props => {
  let className = "";
  if (props.light) {
    className += "light";
  }
  if (props.orange) {
    className += "orange";
  }
  return (
    <h3 className={className} style={props.style}>
      {props.children}
    </h3>
  );
};

export const H4 = props => {
  let className = "";
  if (props.light) {
    className += "light";
  }
  if (props.green) {
    className += "green";
  }
  return (
    <h4 className={className} style={props.style}>
      {props.children}
    </h4>
  );
};

export const P = props => {
  let className = "";
  if (props.light) {
    className += "light";
  }
  if (props.grape) {
    className += "grape";
  }
  if (props.grey) {
    className += "grey";
  }
  return (
    <p className={className} style={props.style}>
      {props.children}
    </p>
  );
};
