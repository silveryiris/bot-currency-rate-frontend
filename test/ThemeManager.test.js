import { expect } from "chai"
import { JSDOM } from "jsdom"
import ThemeManager from "../src/helpers/ThemeManager.js"

describe("Libraries - Theme Manager", () => {
  before(() => {
    const { window } = new JSDOM("<!DOCTYPE html><body></body>", { url: "http://localhost/" })
    global.localStorage = window.localStorage
    global.Node = window.Node
  })

  it("can apply theme string on dom", () => {
    const testTheme = "testOk"

    const { window } = new JSDOM("<!DOCTYPE html><body></body>", { url: "http://localhost/" })
    const body = window.document.body
    const classList = [testTheme, "dummyTheme"]
    const tm = new ThemeManager({ themeClassList: classList, domTag: body })

    tm.applyTheme(0)
    const result = body.getAttribute("data-theme")

    expect(result).to.equal(testTheme)
  })

  it("can keep theme persistent", () => {
    const testTheme = "testOk"
    const testPersistentKey = "test-key"

    const { window } = new JSDOM("<!DOCTYPE html><body></body>", { url: "http://localhost/" })
    const body = window.document.body
    const classList = ["light", "dark"]

    const tm = new ThemeManager({
      persistentKey: testPersistentKey,
      persistentStorage: window.localStorage,
      themeClassList: classList,
      domTag: body,
    })

    tm.applyTheme(testTheme)
    const result = window.localStorage.getItem(testPersistentKey)

    expect(result).to.equal(testTheme)
  })
})
