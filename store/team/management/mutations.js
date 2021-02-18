export const mutations = {
  TEAM_MANAGEMENT_SET_SELECTED_CATEGORY: (state, payload) => {
    state.selectedCategory = payload
  },
  TEAM_MANAGEMENT_SET_LOADING: (state, payload) => {
    state.loading = payload
  },
  TEAM_MANAGEMENT_SET_ERROR: (state, payload) => {
    state.error = payload
  },
  TEAM_MANAGEMENT_SET_QUERY: (state, payload) => {
    state.query = payload
  },
  TEAM_MANAGEMENT_SET_MY_TEAM: (state, payload) => {
    state.myTeam = { ...state.myTeam, ...payload }
  },
  TEAM_MANAGEMENT_SET_ADDITIONAL_MEMBERS(state, payload) {
    state.addtionalMembers = { ...state.addtionalMembers, ...payload }
  }
}
