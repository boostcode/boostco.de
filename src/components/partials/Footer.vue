<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>
      &copy; 2016 - {{ year }} BoostCode -
      <a href="https://github.com/boostcode" target="_blank">GitHub</a> -
      <a href="https://twitter.com/boostcode" target="_blank">Twitter</a> -
      <a href="https://www.iubenda.com/privacy-policy/7904617" target="_blank">Privacy</a> -
      <a href="https://www.iubenda.com/privacy-policy/7904617/cookie-policy" target="_blank">Cookie</a> Policy
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
