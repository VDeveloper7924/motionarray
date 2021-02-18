import Vuex from 'vuex'

import pricing from './pricing'
import teamDetails from './team/details'
import teamInvoices from './team/invoices'
import teamInvitation from './team/invitation'
import teamManagement from './team/management'

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      pricing,
      teamDetails,
      teamInvoices,
      teamInvitation,
      teamManagement
    }
  })
}

export default store
