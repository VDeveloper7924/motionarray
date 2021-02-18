import * as miscService from '@/services/misc'
import * as accountService from '@/services/account'

export const actions = {
  async getCountries({ dispatch, commit }, payload) {
    const { data } = await miscService.getCountryList()
    return data
  },
  /* basic */
  setTabIndex({ dispatch, commit }, payload) {
    commit('PRICING_SET_TAB_INDEX', payload)
  },
  setSelectedPlan({ dispatch, commit }, payload) {
    commit('PRICING_SET_SELECTED_PLAN', payload)
  },
  setCurrentPlan({ dispatch, commit }, payload) {
    commit('PRICING_SET_CURRENT_PLAN', payload)
  },
  setIsLoggedIn({ dispatch, commit }, payload) {
    commit('PRICING_SET_IS_LOGGED_IN', payload)
  },
  /* team signup */
  async validateTeamStep1({ dispatch, commit }, payload) {
    const result = await accountService.validateTeamCreateStep1(payload)
    return result
  },
  async validateTeamStep2({ dispatch, commit }, payload) {
    const result = await accountService.validateTeamCreateStep2(payload)
    return result
  },
  async createTeam({ dispatch, commit }, payload) {
    const result = await accountService.createTeam(payload)
    return result
  },
  setTeamStep1({ dispatch, commit }, payload) {
    commit('PRICING_SET_TEAM_STEP1', payload)
  },
  setTeamStep2({ dispatch, commit }, payload) {
    commit('PRICING_SET_TEAM_STEP2', payload)
  },

  /* single signup */
  async validateSingleFree({ dispatch, commit }, payload) {
    const result = await accountService.validateSingleSignupFree(payload)
    return result
  },
  async validateSingleStripe({ dispatch, commit }, payload) {
    const result = await accountService.validateSingleSignupStripe(payload)
    return result
  },
  async validateSinglePaypal({ dispatch, commit }, payload) {
    const result = await accountService.validateSingleSignupPaypal(payload)
    return result
  },
  async signupFree({}, payload) {
    const result = await accountService.singleSignupFree(payload)
    return result
  },
  async signupWithStripe({}, payload) {
    const result = await accountService.signupWithStripe(payload)
    return result
  },
  async signupWithPaypal({}, payload) {
    const result = await accountService.signupWithPaypal(payload)
    return result
  }
}
