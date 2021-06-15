import { output } from './output.js'
import { pass } from './pass.js'
import { fail } from './fail.js'
import { mustBeTrue } from './mustBeTrue.js'
import { mustBeTruthy } from './mustBeTruthy.js'
import { isEqual } from './isEqual.js'

window.ett = {}
window.ett.output = output
window.ett.pass = pass
window.ett.fail = fail
window.ett.mustBeTrue = mustBeTrue
window.ett.mustBeTruthy = mustBeTruthy
window.ett.isEqual = isEqual