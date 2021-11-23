module.exports = {
  configWebpack({ config }) {
    config.externals({
      'lodash': `require('/workers/lodash.min.js')`,
    })
  }
};
