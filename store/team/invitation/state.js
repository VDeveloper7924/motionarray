export const state = {
  inviteToken: null,
  inviteMember: {
    id: null,
    email: null,
    firstname: null,
    lastname: null,
    name: null,
    invited_by_user: {
      email: null,
      firstname: null,
      lastname: null
    },
    team_membership_status_status: {
      id: null,
      name: null
    },
    team_roles: [],
    user_exists: false,
    password: null,
    terms: false,
    created_at: null
  },
  loading: {
    inviteToken: false,
    inviteMember: false
  },
  error: null
}
