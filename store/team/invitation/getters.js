export const getters = {
  inviteToken: (state) => state.inviteToken,
  invitedByUser: (state) => state.inviteMember.invited_by_user,
  inviteMember: (state) => state.inviteMember,
  inviteLoading: (state) => state.loading,
  errorMessage1: (state) => {
    const error = state.error
    return error ? error.message : null
  },
  hasError1: (state) => (param) => {
    const error = state.error

    if (!error) return null

    const { errors } = error

    if (!errors) return null

    if (!errors[param]) return null

    return errors[param][0]
  }
}
