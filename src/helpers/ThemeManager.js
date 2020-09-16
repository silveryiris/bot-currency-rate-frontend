class ThemeParametersError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

class ThemeManager {
  constructor({
    domTag = "body",
    persistentStorage = localStorage,
    persistentKey = "theme",
    themeClassList,
    defaultIndex = 0,
  } = {}) {
    if (themeClassList && themeClassList.length > 0) {
      this.targetDom = this.getTargetDom(domTag)

      this.persistentStorage = persistentStorage
      this.persistentKey = persistentKey
      this.themeClassList = [...themeClassList]

      const persistentIndex = this.getPresistentThemeIndex()
      this.currentIndex = persistentIndex || defaultIndex
      this.applyTheme(this.currentIndex)
    } else {
      throw new ThemeParametersError("themeClassList is required in parameter.")
    }
  }

  getTargetDom(domTag) {
    if (typeof domTag === "object" && domTag instanceof Node) {
      return domTag
    } else {
      return document.querySelector(domTag)
    }
  }

  setPersistentStorage(storage) {
    this.persistentStorage = storage
  }

  getPresistentThemeIndex() {
    return this.persistentStorage.getItem(this.persistentKey)
  }

  setPersistentThemeIndex(index) {
    this.persistentStorage.setItem(this.persistentKey, index)
  }

  getCurrentThemeClass() {
    return this.targetDom.getAttribute("data-theme")
  }

  setCurrentThemeClass(themeClass) {
    this.targetDom.setAttribute("data-theme", themeClass)
  }

  getCurrentThemeIndex() {
    return this.currentIndex
  }

  setCurrentThemeIndex(index) {
    this.currentIndex = index
  }

  applyTheme(themeIndex) {
    const themeClass = this.themeClassList[themeIndex]
    this.setCurrentThemeClass(themeClass)
    this.setPersistentThemeIndex(themeIndex)
  }
}

export default ThemeManager
