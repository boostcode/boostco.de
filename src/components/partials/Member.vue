<template>
    <v-card>
        <h1>{{ data.firstname }} {{ data.lastname }}</h1>
    </v-card>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data: () => ({

  })
}
</script>
