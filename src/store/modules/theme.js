import ThemeManager from "@/helpers/ThemeManager.js"

const classList = ["light", "dark"]
const tm = new ThemeManager({ themeClassList: classList })

const state = {
  currentThemeClassIndex: tm.getCurrentThemeIndex(),
  themeManager: tm,
  classList,
}

const actions = {
  loadThemeFromStorage({ state, dispatch }) {
    const themeListIndex = state.themeManager.getPresistentThemeIndex()
    dispatch("changeTheme", themeListIndex)
  },
  changeTheme({ state, commit }, themeListIndex) {
    const nextIndex = Number(state.currentThemeClassIndex) + 1
    const index = nextIndex >= state.classList.length ? 0 : nextIndex

    const targetIndex = themeListIndex ?? index

    state.themeManager.applyTheme(targetIndex)
    commit("setThemeClassIndex", targetIndex)
  },
}

const mutations = {
  setThemeClassIndex(state, index) {
    state.currentThemeClassIndex = index
  },
}

const getters = {
  currentThemeClass(state) {
    return state.classList[state.currentThemeClassIndex]
  },
}

export default { namespaced: true, state, actions, mutations, getters }
