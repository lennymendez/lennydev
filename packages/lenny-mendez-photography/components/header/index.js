import React from "react";
import Head from "next/head";
import Navigation from "../navigation";

export default () => {
  return (
    <div>
      <Head>
        {/* TITLE */}
        <title>Lenny Mendez Photography</title>
        {/* META */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* FONTS */}
        <link rel="stylesheet" href="https://use.typekit.net/gya4jtg.css" />
      </Head>
      <Navigation />
    </div>
  );
};
