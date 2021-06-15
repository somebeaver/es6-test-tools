const tap = require('tap')

// what's being tested
const server = require('../src/server/server.js')

/**
 * This test will start up the ett-server so we can see that it's serving pages
 * properly.
 */
tap.test("👉 es6-test-tools Server", async (t) => {
  server.start()
})