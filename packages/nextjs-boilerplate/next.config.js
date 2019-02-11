module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "private_secret"
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
    mySecret: "public_secret" // Pass through env variables
  }
};
