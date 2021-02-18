export const getters = {
  countryList: (state) => state.countryList,
  team: (state) => state.team,
  loading: (state) => state.loading.team || state.loading.countryList,
  saved: (state) => state.saved,
  errorMessage: (state) => {
    const error = state.error
    return error ? error.message : null
  },
  hasError: (state) => (param) => {
    const error = state.error

    if (!error) return null

    const { errors } = error

    if (!errors) return null

    if (!errors[param]) return null

    return errors[param][0]
  }
}
