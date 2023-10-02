module.exports = {
  resolve: {
    fallback: {
      fs: false,
      Buffer: false,
      http: false,
      https: false,
      url: false,
      zlib: false
    }
  },
  module: {
    unknownContextCritical: false
  }
};
