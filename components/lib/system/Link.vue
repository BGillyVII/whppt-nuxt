<template>
  <w-link :data="selectedComponent.value"></w-link>
</template>

<script>
import { mapState } from 'vuex';
import WLink from '../whpptComponents/Link';

export default {
  name: 'WhpptLinkEdit',
  components: { WLink },
  computed: {
    ...mapState('whppt-nuxt/editor', ['selectedComponent']),
  },
};
</script>
<style scoped>
.whppt-tabs {
  display: flex;
  padding-bottom: 1.5rem;
  padding-left: 0;
}

.whppt-tabs__info {
  padding: 0 1.25rem;
  color: gray;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.whppt-input-half {
  padding: 0 0.5rem;
}
</style>
