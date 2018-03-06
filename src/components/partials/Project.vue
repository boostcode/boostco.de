<template>
  <v-flex xs12 sm12 md6 xl6>
    <v-card class="mt-4">
      <h1 class="ml-3">{{ project.name }}</h1>
      <hr class="ml-3 mr-3 mt-2"/>
      <img :src="`/static/projects/${ project.image }`" class="pa-3"/>
      <p class="pa-3 text-xs-left">{{ project.intro }}</p>
      <p class="pa-3 text-xs-left" v-if="full">{{ project.description }}</p>
      <h4 class="ml-4">Technologies</h4>
      <template v-for="tech in project.technologies">
        <v-chip label v-bind:key="tech" class="ml-2 mb-4 mr-2">{{ tech }}</v-chip>
      </template>
    </v-card>
  </v-flex>

</template>

<script>
export default {
  props: {
    project: Object,
    full: Boolean
  },
  data: () => ({})
}
</script>

<style scoped>
  h1 {
    color: #2e96db;
  }

  h4 {
    color: #2e96db;
  }

  hr {
    border: 1px solid #2e96db;
  }

  img {
    width: 400px;
  }
</style>
