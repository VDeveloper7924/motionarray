import ajax from '@/services/ajax'
import * as accountService from '@/services/account'

export const actions = {
  setSelectedCategory({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_SELECTED_CATEGORY', payload)
  },

  setQuery({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_QUERY', payload)
  },

  setMyTeam({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_MY_TEAM', payload)
  },

  setError({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_ERROR', payload)
  },

  setLoading({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_LOADING', payload)
  },

  setAdditionalMembers({ commit }, payload) {
    commit('TEAM_MANAGEMENT_SET_ADDITIONAL_MEMBERS', payload)
  },

  editAction: async ({ dispatch }, payload) => {
    try {
      dispatch('setError', null)
      dispatch('setLoading', true)
      const { method, url } = payload
      let result
      if (method === 'delete') {
        result = await ajax.del(url)
      } else {
        result = await ajax[method](url)
      }
      const { data } = result
      if (data && data.data) {
        dispatch('setMyTeam', data.data)
      }
      dispatch('setLoading', false)
      return result
    } catch (error) {
      dispatch('setError', error)
      dispatch('setLoading', false)
      return null
    }
  },

  getMembers: async ({ dispatch, commit }) => {
    try {
      dispatch('setError', null)
      dispatch('setLoading', true)
      const { data } = await accountService.getMyTeamMemberships()
      dispatch('setMyTeam', {
        team_memberships: data.data,
        links: data.links,
        meta: data.meta
      })
      dispatch('setLoading', false)
    } catch (error) {
      dispatch('setError', error)
      dispatch('setLoading', false)
      return null
    }
  },

  getMyTeam: async ({ dispatch }, payload) => {
    try {
      const { data } = await accountService.getMyTeam()
      dispatch('setMyTeam', data.data)
      return data
    } catch (error) {
      dispatch('setError', error)
      return null
    }
  },

  calculateProrateAmmount: async ({ dispatch }, payload) => {
    try {
      const { data } = await accountService.calculateProrateAmount(payload)
      dispatch('setAdditionalMembers', data)
      return data
    } catch (error) {
      dispatch('setError', error)
      return null
    }
  },

  updateSeats: async ({ dispatch }, payload) => {
    try {
      dispatch('setError', null)
      dispatch('setLoading', true)
      const { data } = await accountService.updateTeamSeats(payload)
      if (data && data.data) {
        dispatch('setMyTeam', data.data)
      }
      dispatch('setLoading', false)
      return data
    } catch (error) {
      dispatch('setError', error)
      dispatch('setLoading', false)
      return null
    }
  },
  inviteMembers: async ({ dispatch }, payload) => {
    try {
      dispatch('setError', null)
      dispatch('setLoading', true)
      const { data } = await accountService.inviteMemberToMyTeam(payload)
      if (data && data.data) {
        dispatch('setMyTeam', data.data)
      }
      dispatch('setLoading', false)
      return data
    } catch (error) {
      dispatch('setError', error)
      dispatch('setLoading', false)
      return null
    }
  }
}
