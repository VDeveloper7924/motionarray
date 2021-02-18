export const state = {
  addtionalMembers: {
    owner_email: '',
    invite_emails: [],
    prorated_amount: 0,
    proration_date: 0,
    days_until_renewal: 0
  },
  myTeam: {
    team_memberships: [],
    links: {},
    meta: {},
    seats: {
      total: 0,
      empty: 0
    }
  },
  selectedCategory: 'members', //members, admins, pending
  loading: false,
  error: null,
  query: null
}
