# es6-test-tools

A small collection of tools for testing JavaScript in modern ES6 browser
environments. Files use ES6 exports, so there's no need for transpiling or
messing around with getting set up.

Additionally, this comes with an Express server for delivering test suits to the
browser, so that your ES6 imports work out of the box.

For testing JavaScript that uses CommonJS packages, I suggest the well
established [node-tap](https://node-tap.org/) project instead.

## Getting Started

### 1. Install with npm

```
npm i "github:somebeaver/es6-test-tools"
```

### 2. Create the test suite

You must create a folder in your project root called `test`. Inside of it,
create a file called `es6-test-tools-suite.js`. You can run tests directly in
here, or use it to import other tests. ES6 imports/exports work here.

All of the testing tools are available to you globally under `window.ett`.

```javascript
// test/es6-test-tools-suite.js

import { exampleTest } from './example.test.js'
exampleTest()
```

```javascript
// test/example.test.js

import { thingToTest1, thingToTest2, thingToTest3 } from './example.test.js'

// the UI and the console will show you whether this test passes or not
ett.mustBeTrue(typeof thingToTest1 === 'function')
```

### 3. Start the server

Once your test suite is ready to run, start the server by running

`npm run ett-server`

Then browse to `localhost:3000` in any browser with an ES6 environment that you
want to run your test suite in.

## Testing Tools

All of these functions are available globally under `ett`. For example,
`ett.mustBeTrue()`.

### `output()`
Generic textual output in the UI and console.

### `pass()`
Outputs a single line to the output box with a green checkmark.

### `fail()`
Outputs a single line to the output box with a red stop sign.

### `mustBeTrue()`
Invokes `pass()` or `fail()` depending on if the given value is true.

### `mustBeTruthy()`
Invokes `pass()` or `fail()` depending on if the given value is truthy.