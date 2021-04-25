export function createTokenList(string) {
  const element = document.createElement("div")
  element.className = string || ""
  return element.classList
}

export function removeToken(string, token) {
  const tokenList = createTokenList(string)
  tokenList.remove(token)
  return tokenList.toString()
}

export function addToken(string, token) {
  const tokenList = createTokenList(string)
  tokenList.add(token)
  return tokenList.toString()
}
