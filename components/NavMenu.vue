<template>
  <div>
    <NavMenuItem title="Video Platform" />
    <NavMenuItem title="Learn" />
    <NavMenuItem title="Pricing" />
  </div>
</template>

<script>
import NavMenuItem from './NavMenuItem'
import { menuItems } from '../constants'

export default {
  components: {
    NavMenuItem
  },
  mounted: () => {}
}
</script>
