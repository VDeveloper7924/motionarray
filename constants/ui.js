/* Define constants */
export const MEMBER_CATEGORY = {
  MEMBERS: 'members',
  ADMINS: 'admins',
  PENDING: 'pending'
}

/* price of a seat - $(usd) */
export const SEAT_PRICE = 224.99

/* account/team */
export const TEAM_MANAGER_TABS = [
  {
    name: 'MEMBERS',
    id: MEMBER_CATEGORY.MEMBERS
  },
  {
    name: 'ADMINS',
    id: MEMBER_CATEGORY.ADMINS
  },
  {
    name: 'PENDING',
    id: MEMBER_CATEGORY.PENDING
  }
]

export const TEAM_MANAGER_EDIT_MENU = {
  allocate_seat: {
    id: 'allocate_seat',
    name: 'Allocate Seat',
    action: 'allocateSeat',
    confirm: {
      title: 'Allocate Seat?',
      description: 'Do you want to make <%name%> allocated seat?',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['active', 'pending'],
    is_admin: null
  },
  remove_seat: {
    id: 'remove_seat',
    name: 'Remove Seat',
    action: 'removeSeat',
    confirm: {
      title: 'Remove Seat?',
      description: 'Do you want to make <%name%> removed seat?',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['active', 'pending'],
    is_admin: null
  },
  make_admin: {
    id: 'make_admin',
    name: 'Make Admin',
    action: 'makeAdmin',
    confirm: {
      title: 'Make Admin?',
      description: 'Do you want to make <%name%> an Admin?',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['active'],
    is_admin: false
  },
  remove_admin: {
    id: 'remove_admin',
    name: 'Remove Admin',
    action: 'removeAdmin',
    confirm: {
      title: 'Remove Admin?',
      description: 'Do you want to make <%name%> a Non-admin?',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['active'],
    is_admin: true
  },
  resend_invite: {
    id: 'resend_invite',
    name: 'Resend Invite',
    action: 'resendInvite',
    confirm: {
      title: 'Resend Invite?',
      description: 'Do you want to send an invite again?',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['pending'],
    is_admin: false
  },
  remove_from_team: {
    id: 'remove_from_team',
    name: 'Remove From Team',
    action: 'removeFromTeam',
    confirm: {
      title: 'Remove Members?',
      description:
        'The team slot will remain active. A new member can be added to this slot at no additional cost through this billing cycle.',
      yes: 'Confirm',
      no: 'Cancel'
    },
    status: ['active', 'pending'],
    is_admin: null
  }
}

export const TEAM_INVOICES_TABLE_HEADER = [
  {
    id: 'number',
    name: 'Number',
    css: 'font-semibold w-1/3 text-left'
  },
  {
    id: 'date',
    name: 'Date',
    css: 'text-left'
  },
  {
    id: 'link',
    name: '',
    css:
      'font-semibold text-ma-blue-1 text-right cursor-pointer hover:text-ma-blue-0'
  },
  {
    id: 'amount',
    name: 'Amount',
    css: 'font-semibold w-16 text-right'
  }
]

/* pricing */
export const PRICING_PARTNERS = [
  {
    id: 'adobe_exchange_partner',
    name: 'Adobe Exchange Partner',
    image: '/assets/images/content/pricing/adobe-exchange-partner.svg'
  },
  {
    id: 'davinci_resolve',
    name: 'DaVinci Resolve',
    image: '/assets/images/content/pricing/davinci-resolve.svg'
  },
  {
    id: 'final_cut_pro',
    name: 'Final Cut Pro',
    image: '/assets/images/content/pricing/final-cut-pro.svg'
  }
]

export const PRICING_TEAM_TABS = [
  {
    id: 'single_user',
    name: 'Single User Plans'
  },
  {
    id: 'team',
    name: 'Team Plans'
  }
]

export const PRICING_SINGLE_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    description: 'Instant access to hundreds of free assets',
    billing_id: 'free',
    features: [
      'Free Downloads Only',
      'Requests Not Included',
      'Shifter Plugin Only',
      'Video Review 1 Month Trial',
      'Portfolio Site Builder 1 Month Trial',
      'Limited Customer Support',
      '1GB Review & Upload Storage'
    ]
  },

  {
    id: 'monthly',
    name: 'Monthly',
    price: 29,
    description: 'Professional tools & unlimited downloads',
    billing_id: 'monthly_unlimited_2020',
    features: [
      'Unlimited Downloads',
      'Request Custom Assets',
      'All Plugins Included',
      'Video Review Platform Included',
      'Portfolio Site Builder Included',
      'Standard Customer Support',
      '250GB Review & Upload Storage'
    ]
  },

  {
    id: 'annual',
    name: 'Annual',
    price: 249,
    description: 'Everything from monthly…but cheaper',
    billing_id: 'yearly_unlimited_2020',
    features: [
      'Unlimited Downloads',
      'Request Custom Assets',
      'All Plugins Included',
      'Video Review Platform Included',
      'Portfolio Site Builder Included',
      'Standard Customer Support',
      '250GB Review & Upload Storage'
    ]
  }
]

export const PRICING_TEAM_PLANS = [
  {
    id: 'invite_members',
    title: 'Invite Members',
    description:
      'Teams require at least 2 paid members. Invites will be sent to each included team member.'
  },

  {
    id: 'annual_membership',
    title: 'Annual Membership',
    description:
      'Team memberships are for Annual accounts at a 10% discounted rate of $224.99 per member.'
  },

  {
    id: 'add_new_members',
    title: 'Add New Members',
    description:
      'Memberships are billed fully at the time of signup. New members can be added later on a prorated basis.'
  }
]

export const PRODUCER_TESTIMONIALS = [
  {
    testimonialBody:
      'Motion Array has everything. Tons of great assets. Smart review tools and fast customer service. Perfection!',
    producerName: 'Brian Caiazza',
    producerDuration: 'truestudios.biz',
    producerAvatar: {
      url:
        '/assets/images/site/testimonials/brian-caiazza.jpg?w=40&h=40&fm=jpg&dpr=2&q=60&fit=crop&crop=faces'
    }
  },
  {
    testimonialBody:
      'Motion Array’s services are something I didn’t think I could find in my career as a freelance filmmaker. Motion Array is a one of a kind platform for content creators!',
    producerName: 'Ryan Khan',
    producerDuration: 'ryanckhanfilms.com',
    producerAvatar: {
      url:
        '/assets/images/site/testimonials/ryan-khan.jpg?w=40&h=40&fm=jpg&dpr=2&q=60&fit=crop&crop=faces'
    }
  },
  {
    testimonialBody:
      "Motion Array is one of the lifelines for my business. They've leveled the playing field for the little guy, and if I could give them 100 stars I would.",
    producerName: 'William Beebe',
    producerDuration: 'Cinematic Videographers, LLC',
    producerAvatar: {
      url:
        '/assets/images/site/testimonials/william-beebe.jpg?w=40&h=40&fm=jpg&dpr=2&q=60&fit=crop&crop=faces'
    }
  }
]
