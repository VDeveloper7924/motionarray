import * as accountService from '@/services/account'

export const actions = {
  async getInvoices({ commit }, payload) {
    commit('TEAM_INVOICES_SET_LOADING', true)
    commit('TEAM_INVOICES_SET_ERROR', null)
    try {
      const { page, itemsPerPage, dateRange } = payload
      const { data } = await accountService.getTeamInvoices()
      commit('TEAM_INVOICES_SET_ITEMS', {
        ...data,
        page,
        itemsPerPage,
        dateRange
      })
      return data
    } catch (err) {
      commit('TEAM_INVOICES_SET_LOADING', false)
      commit('TEAM_INVOICES_SET_ERROR', err)
      return null
    }
  },
  setDateRange({ commit }, payload) {
    commit('TEAM_INVOICES_SET_DATE_RANGE', payload)
  }
}
