import * as accountService from '@/services/account'

export const actions = {
  signIn: async ({}, payload) => {
    const { data } = await accountService.signIn(payload)
    return data
  },
  acceptInvitationByToken: async ({ state }, payload) => {
    const { data } = await accountService.acceptInvitationByToken(
      state.inviteToken
    )
    return data
  },
  setInviteToken: ({ dispatch, commit }, payload) => {
    commit('TEAM_INVITATION_SET_INVITE_TOKEN', payload)
    dispatch('getMembershipFromToken', payload)
  },
  setInviteTokenAndRedirect: ({ dispatch, commit }, payload) => {
    commit('TEAM_INVITATION_SET_INVITE_TOKEN', payload)
    dispatch('getMembershipFromTokenAndRedirect', payload)
  },
  getMembershipFromToken: async ({ commit }, payload) => {
    try {
      const { data } = await accountService.getMembershipFromToken(payload)
      const member = data.data
      commit('TEAM_INVITATION_SET_INVITE_MEMBER', member)
    } catch (err) {}
  },
  getMembershipFromTokenAndRedirect: async ({ dispatch, commit }, payload) => {
    try {
      const { data } = await accountService.getMembershipFromToken(payload)
      const member = data.data
      commit('TEAM_INVITATION_SET_INVITE_MEMBER', member)
      dispatch('redirectByMembership', member)
    } catch (err) {}
  },
  redirectByMembership: ({ state }, payload) => {
    const { user_exists, email } = payload
    let path = 'create-account'

    if (user_exists) {
      path =
        window.__ME__ && window.__ME__.email === email ? 'respond' : 'log-in'
    }
  },
  createFromTeamInviteToken: async ({ state, commit }, payload) => {
    try {
      commit('TEAM_INVITATION_SET_ERROR', null)
      commit('TEAM_INVITATION_SET_LOADING', { inviteMember: true })

      const { data } = await accountService.createFromTeamInviteToken(
        state.inviteToken,
        payload
      )
      const member = data.data

      commit('TEAM_INVITATION_SET_INVITE_MEMBER', member)
      window.location.href = '/sign-up/thank-you/paid'
    } catch (err) {
      commit('TEAM_INVITATION_SET_LOADING', { inviteMember: false })
      commit('TEAM_INVITATION_SET_ERROR', { ...err.response.data })
    }
  },
  clearError: async ({ commit }) => {
    commit('TEAM_INVITATION_SET_ERROR', null)
  }
}
