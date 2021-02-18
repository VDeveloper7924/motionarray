export const mutations = {
  PRICING_SET_TAB_INDEX(state, payload) {
    state.tabIndex = payload
  },
  PRICING_SET_SELECTED_PLAN(state, payload) {
    state.selectedPlan = payload
  },
  PRICING_SET_CURRENT_PLAN(state, payload) {
    state.currentPlan = payload
  },
  PRICING_SET_IS_LOGGED_IN(state, payload) {
    state.isLoggedIn = payload
  },
  /* team signup */
  PRICING_SET_TEAM_STEP1(state, payload) {
    state.teamStep1 = { ...state.teamStep1, ...payload }
  },
  PRICING_SET_TEAM_STEP2(state, payload) {
    state.teamStep2 = { ...state.teamStep2, ...payload }
  }
}
