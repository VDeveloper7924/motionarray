import * as miscService from '../../../services/misc'
import * as accountService from '../../../services/account'

export const actions = {
  getCountryList: async ({ commit }) => {
    try {
      commit('TEAM_DETAILS_SET_LOADING', { countryList: true })

      const { data } = await miscService.getCountryList()
      const countryList = data.items

      commit('TEAM_DETAILS_SET_COUNTRY_LIST', countryList)
      commit('TEAM_DETAILS_SET_LOADING', { countryList: false })
    } catch (err) {
      commit('TEAM_DETAILS_SET_LOADING', { countryList: false })
      commit('TEAM_DETAILS_SET_ERROR', err)
    }
  },
  getMyTeam: async ({ commit }) => {
    try {
      commit('TEAM_DETAILS_SET_LOADING', { team: true })

      const { data } = await accountService.getMyTeam()
      const team = data.data

      commit('TEAM_DETAILS_SET_TEAM', team)
      commit('TEAM_DETAILS_SET_LOADING', { team: false })
    } catch (err) {
      commit('TEAM_DETAILS_SET_LOADING', { team: false })
      commit('TEAM_DETAILS_SET_ERROR', err)
    }
  },
  updateMyTeam: async ({ commit }, payload) => {
    try {
      commit('TEAM_DETAILS_SET_ERROR', null)
      commit('TEAM_DETAILS_SET_LOADING', { team: true })

      const { data } = await accountService.updateMyTeam(payload)
      const team = data.data

      commit('TEAM_DETAILS_SET_TEAM', team)
      commit('TEAM_DETAILS_SET_SAVED', true)
      commit('TEAM_DETAILS_SET_LOADING', { team: false })
    } catch (err) {
      commit('TEAM_DETAILS_SET_LOADING', { team: false })
      commit('TEAM_DETAILS_SET_ERROR', { ...err.response.data })
    }
  },
  clearError: async ({ commit }) => {
    commit('TEAM_DETAILS_SET_ERROR', null)
  },
  resetSaved: async ({ commit }) => {
    commit('TEAM_DETAILS_SET_SAVED', false)
  }
}
