import path from "path"

export class ApplicationController {
  constructor(compiler, req, res, next) {
    this.compiler = compiler
    this.req = req
    this.res = res
    this.next = next
  }

  renderHTML(filename) {
    const filePath = path.resolve(this.compiler.outputPath, filename)

    this.compiler.outputFileSystem.readFile(filePath, (err, result) => {
      if (err) return this.next(err)

      this.res.set("content-type", "text/html")
      this.res.send(result)
      this.res.end()
    })
  }
}
