export const mutations = {
  TEAM_DETAILS_SET_COUNTRY_LIST: (state, payload) => {
    state.countryList = [...payload]
    state.loading.countryList = false
  },
  TEAM_DETAILS_SET_TEAM: (state, payload) => {
    state.team = { ...payload }
    state.loading.team = false
  },
  TEAM_DETAILS_SET_LOADING: (state, payload) => {
    state.loading = { ...state.loading, ...payload }
  },
  TEAM_DETAILS_SET_ERROR: (state, payload) => {
    state.error = { ...payload }
  },
  TEAM_DETAILS_SET_SAVED: (state, payload) => {
    state.saved = payload
  }
}
