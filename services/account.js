import ajax from './ajax'

/* SIGNIN/UP START */
export const signIn = async (payload) => {
  return await ajax.post('/api/sign-in', payload)
}

export const validateSingleSignupFree = async (payload) => {
  return await ajax.post('/api/sign-up/free/validate', payload)
}

export const validateSingleSignupStripe = async (payload) => {
  return await ajax.post('/api/sign-up/stripe/validate', payload)
}

export const validateSingleSignupPaypal = async (payload) => {
  return await ajax.post('/api/sign-up/paypal/validate', payload)
}

export const singleSignupFree = async (payload) => {
  return await ajax.post('/api/sign-up/free', payload)
}

export const signupWithStripe = async (payload) => {
  return await ajax.post('/api/sign-up/stripe', payload)
}

export const signupWithPaypal = async (payload) => {
  return await ajax.post('/api/sign-up/paypal', payload)
}
/* SIGNIN/UP END */

/* USER START */
export const getUser = async () => {
  return await ajax.get('/api/user')
}

export const sendConfirmationEmail = async () => {
  return await ajax.get('/api/user/send-confirmation-email')
}

export const renewalDate = async () => {
  return await ajax.get('/api/user/renewal-date')
}

export const uploading = async (payload) => {
  return await ajax.post('/api/user/uploading')
}

export const validatePlanChange = async (payload) => {
  return await ajax.post('/user/validate-plan-change', payload)
}

export const sellerIFollow = async () => {
  return await ajax.get('/api/user/sellers-i-follow')
}

export const acceptTos = async (payload) => {
  return await ajax.put('/api/user/accept-tos', payload)
}

export const createFromTeamInviteToken = async (token, payload) => {
  return await ajax.post(
    `/api/user/create-from-team-invite-token/${token}`,
    payload
  )
}
/* USER END */

/* TEAM START */
export const getMembershipFromToken = async (token) => {
  return await ajax.get(`/api/teams/get-membership-from-token/${token}`)
}

export const getMyTeam = async () => {
  return await ajax.get('/api/me/team')
}

export const updateMyTeam = async (payload) => {
  return await ajax.put('/api/me/team', payload)
}

export const getMyTeamMemberships = async () => {
  return await ajax.get('/api/me/team/memberships')
}

export const getTeamInvoices = async () => {
  return await ajax.get('/api/me/team/invoices')
}

export const inviteMemberToMyTeam = async (payload) => {
  return await ajax.put('/api/me/team/invite', payload)
}

export const acceptInvitationByToken = async (token, payload) => {
  return await ajax.put(`/api/me/team/accept-invite/${token}`, payload)
}

export const calculateProrateAmount = async (payload) => {
  return await ajax.post(`/api/me/team/calculate-prorate-amount`, payload)
}

export const updateTeamSeats = async (payload) => {
  return await ajax.post(`/api/me/team/update-seats`, payload)
}

export const validateTeamCreateStep1 = async (payload) => {
  return await ajax.post(`/api/me/team/validate/create-step-1`, payload)
}

export const validateTeamCreateStep2 = async (payload) => {
  return await ajax.post(`/api/me/team/validate/create-step-2`, payload)
}

export const createTeam = async (payload) => {
  return await ajax.post(`/api/me/team/create`, payload)
}

/* TEAM END */
