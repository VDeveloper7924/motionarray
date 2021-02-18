export const state = {
  tabIndex: 0 /* team or single */,
  selectedPlan: null /* free, monthly, yearly... (single) */,
  currentPlan: null,
  teamStep1: {
    owner_email: '',
    invite_emails: [],
    owner_has_seat: false
  },
  teamStep2: {
    owner_email: '',
    token: '',
    password: '',
    full_name: '',
    country_id: null,
    zip: '',
    terms: false
  },
  isLoggedIn: false
}
