export const mutations = {
  TEAM_INVOICES_SET_DATE_RANGE(state, payload) {
    state.dateRange = payload
  },
  TEAM_INVOICES_SET_ITEMS(state, payload) {
    const { total, page, data, dateRange } = payload
    state.data = [...(page > 1 ? state.items.concat(data) : data)]
    state.page = page
    state.loading = false
    state.error = false
    state.total = total
    state.dateRange = dateRange
  },
  TEAM_INVOICES_SET_LOADING(state, payload) {
    state.loading = payload
  },
  TEAM_INVOICES_SET_ERROR(state, payload) {
    state.error = payload
  }
}
