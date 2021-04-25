import express from "express"
import webpack from "webpack"
import webpackConfig from "/webpack.config.js"
import { Middleware } from "./Middleware"
import { Router } from "./Router"
import { Templating } from "./Templating"

const APP = express()
const WEBPACK_CONFIG = webpackConfig
const COMPILER = webpack(WEBPACK_CONFIG)
const PORT = process.env.PORT || 8080

new Templating(APP).start()
new Middleware(APP, COMPILER, WEBPACK_CONFIG).start()
new Router(APP, COMPILER).start()

APP.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
