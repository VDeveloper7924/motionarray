import { MEMBER_CATEGORY } from '../../../constants'
import { matchesSearchQuery } from '../../../utils'

export const getters = {
  activeMembers: (state) => {
    const members = state.myTeam.team_memberships
    const query = state.query

    return members.filter(
      (member) =>
        member.team_membership_status_status.name.toLowerCase() === 'active' &&
        (matchesSearchQuery(member.email, query) ||
          matchesSearchQuery(member.name, query))
    )
  },
  activeAdminMembers: (state, getter) => {
    const { activeMembers } = getter
    const query = state.query

    return activeMembers.filter(
      (member) =>
        member.team_roles.filter(
          (team_role) =>
            team_role.name.toLowerCase() === 'admin' &&
            (matchesSearchQuery(member.email, query) ||
              matchesSearchQuery(member.name, query))
        ).length > 0
    )
  },
  pendingMembers: (state) => {
    const members = state.myTeam.team_memberships
    const query = state.query

    return members.filter(
      (member) =>
        member.team_membership_status_status.name.toLowerCase() === 'pending' &&
        (matchesSearchQuery(member.email, query) ||
          matchesSearchQuery(member.name, query))
    )
  },
  selectedCategoryMembers: (state, getter) => {
    const { selectedCategory } = state
    const { activeMembers, activeAdminMembers, pendingMembers } = getter

    switch (selectedCategory) {
      case MEMBER_CATEGORY.MEMBERS: {
        return activeMembers
      }

      case MEMBER_CATEGORY.ADMINS: {
        return activeAdminMembers
      }

      case MEMBER_CATEGORY.PENDING: {
        return pendingMembers
      }
    }
  },
  categoryMembersCount: (state, getter) => (category) => {
    const { activeMembers, activeAdminMembers, pendingMembers } = getter

    switch (category) {
      case MEMBER_CATEGORY.MEMBERS: {
        return activeMembers.length
      }

      case MEMBER_CATEGORY.ADMINS: {
        return activeAdminMembers.length
      }

      case MEMBER_CATEGORY.PENDING: {
        return pendingMembers.length
      }
    }
  },
  myTeam: (state) => {
    return state.myTeam
  },
  error: (state) => {
    return state.error
  },
  loading: (state) => {
    return state.loading
  }
}
