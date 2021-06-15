const tap = require('tap')

// what's being tested
const server = require('../src/server/server.js')

/**
 * This file tests initializing IndexingService instances with various options.
 */
tap.test("👉 es6-test-tools Server", async (t) => {
  server.start()
})