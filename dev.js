#!/usr/bin/env node
const shelljs = require('shelljs')
const open = require('open')

shelljs.exec(`cross-env NODE_OPTIONS='--inspect' next dev -p 42000`, {
  async: true,
})
open('http://localhost:42000')
