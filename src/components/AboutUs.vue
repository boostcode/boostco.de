<template>
    <div>
        <v-container grid-list-xl fluid fill-height>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm12 md12 xl12 class="text-xs-center">
                    <h1>Team Members</h1>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xl fluid fill-height>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm12 md4 xl4 class="text-xs-center">
                    <template v-for="member in members" >
                        <member :data="member" :key="member.lastname"></member>
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import Member from './partials/Member'

export default {
  name: 'AboutUs',
  components: {
    'member': Member
  },
  data: () => ({
    members: []
  }),
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('http://localhost:8080/static/members.json')
        .then((resp) => {
          console.log(resp.data)
          this.members = resp.data.members
        })
        .catch((err) => {
          console.error((err))
        })
    }
  }
}
</script>

<style scoped>
    h1 {
        color: #2e96db;
    }
</style>
