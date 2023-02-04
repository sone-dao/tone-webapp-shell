#!/usr/bin/env node
/* This is major wip */
const express = require('express')
const next = require('next')
const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(compression())
  server.use((req, res, next) => next())

  server.get('/_next/*', (req, res) => handle(req, res))
  server.all('*', (req, res) => handle(req, res))

  server.listen(42000, (err) => {
    if (err) throw err
  })
})
