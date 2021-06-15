/**
 * Create an Express server that serves the test environment to a browser.
 */
exports.start = function(testDir) {
  const path = require('path')
  const express = require('express')

  const app = express()

  // assuming we got installed in the node_modules dir
  const publicDir = path.normalize(__dirname + '/../../../../')

  console.log('Server is serving this directory as the static root:', publicDir)

  app.use(express.static(publicDir))

  /**
   * Route: /
   *
   * This page delivers the test suite to the browser.
   */
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  console.log('Test server running')
  app.listen(3000)
}