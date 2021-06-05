import express from "express"
import webpack from "webpack"
import webpackConfig from "/webpack.config.js"
import { Middleware } from "./Middleware"
import { Router } from "./Router"
import { Templating } from "./Templating"

const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.port || 8080

new Templating(app).start()
new Middleware(app, compiler, webpackConfig.output.publicPath).start()
new Router(app, compiler).start()

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
