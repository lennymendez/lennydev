import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { H1 } from "../lib/typography";
// uncomment the imports below if you need to fetch data and use secrets from env
// import fetch from "isomorphic-unfetch";
// import getConfig from "next/config";

const App = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    } else {
      // add here scripts that need to be called on component did update
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

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
