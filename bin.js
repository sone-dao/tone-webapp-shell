#!/usr/bin/env node
const shelljs = require('shelljs')
const open = require('open')
shelljs.exec('yarn start:dev', { async: true })
open('http://localhost:42000')
