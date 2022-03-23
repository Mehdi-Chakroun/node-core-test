'use strict'

const util = require('util')

exports.ArrayPrototypeForEach = (arr, fn) => arr.forEach(fn)
exports.ArrayPrototypeJoin = (arr, str) => arr.join(str)
exports.ArrayPrototypePush = (arr, el) => arr.push(el)
exports.ArrayPrototypeShift = arr => arr.shift()
exports.FunctionPrototype = () => {}
exports.FunctionPrototypeBind = (fn, obj) => fn.bind(obj)
exports.lazyInternalUtilInspect = () => util
exports.Number = Number
exports.ObjectCreate = obj => Object.create(obj)
exports.ObjectEntries = obj => Object.entries(obj)
exports.SafeMap = Map
exports.StringPrototypeReplace = (str, search, replacement) =>
  str.replace(search, replacement)
exports.StringPrototypeReplaceAll = (str, search, replacement) =>
  str.replaceAll(search, replacement)
exports.StringPrototypeSplit = (str, search) => str.split(search)