import React, { useState, useEffect } from "react";
// import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { H1 } from "../lib/typography";
import getConfig from "next/config";

const App = () => {
  return (
    <Layout>
      <div>
        <H1>Next JS Boilerplate</H1>
      </div>
    </Layout>
  );
};

// App.getInitialProps = async function(context) {
//   const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
//   const { id } = context.query;
//   const url = `${serverRuntimeConfig.mySecret}${id}`;
//   const options = {
//     method: "GET"
//   };
//   const res = await fetch(url, options);
//   const data = await res.json();
//   return {
//     products: data
//   };
// };

export default App;
