<template>
  <v-flex xs12 sm12 md4 xl4 offset-md1 offset-xl1 class="text-xs-center">
    <v-card>
      <img :src="`/static/team/${ data.image }`" class="pa-3"/>
      <h1>{{ data.firstname }} {{ data.lastname }}</h1>
      <h3>{{ data.title }}</h3>
      <hr class="ml-3 mr-3 mt-2"/>
      <p class="pa-3 text-xs-left">{{ data.bio }}</p>
      <h4>Skills</h4>
      <template v-for="skill in data.skills">
        <v-chip label v-bind:key="skill">{{ skill }}</v-chip>
      </template>
      <h4 class="mt-3">Social</h4>
      <template v-for="(url, social) in data.social">
        <a :href="url" target="_blank" v-bind:key="url">
          <v-icon large class="mb-4 pa-1">fab fa-{{social}}</v-icon>
        </a>
      </template>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data: () => ({})
}
</script>

<style scoped>
  img {
    width: 100%;
  }

  hr {
    border: 1px solid #2e96db;
  }

  h3 {
    color: #2e96db;
  }
</style>
