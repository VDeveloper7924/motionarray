export const mutations = {
  TEAM_INVITATION_SET_INVITE_TOKEN: (state, payload) => {
    state.inviteToken = payload
  },
  TEAM_INVITATION_SET_INVITE_MEMBER: (state, payload) => {
    state.inviteMember = { ...payload }
  },
  TEAM_INVITATION_SET_LOADING: (state, payload) => {
    state.loading = { ...state.loading, ...payload }
  },
  TEAM_INVITATION_SET_ERROR: (state, payload) => {
    state.error = { ...payload }
  }
}
