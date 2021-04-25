import "./css/styles.scss"
import * as Turbo from "@hotwired/turbo"
import regeneratorRuntime from "regenerator-runtime"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./js/controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

if (typeof(module.hot) !== "undefined") module.hot.accept()
