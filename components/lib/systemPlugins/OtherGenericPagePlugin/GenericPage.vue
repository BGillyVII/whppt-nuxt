<template>
  <div>
    <whppt-select
      v-model="page.template"
      :items="page && page.pageType.templates"
      label="Page Template"
      value-prop="label"
      key-prop="key"
    />
  </div>
</template>

<script>
import WhpptSelect from '../../whpptComponents/WhpptSelect';

export default {
  name: 'OtherWhpptGenericPage',
  components: { WhpptSelect },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    showError: false,
  }),
};
</script>

<style></style>
