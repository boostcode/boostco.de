<template>
  <div>
    <v-container grid-list-xl text-xs-left fluid fill-height>
      <v-layout row wrap>
        <template v-for="member in members">
          <member :data="member" :key="member.lastname"></member>
        </template>
      </v-layout>
    </v-container>
    <v-container grid-list-xl fluid fill-height>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 md8 xl8 class="text-xs-left">
          <h1>Who we are</h1>
          <hr class="mb-4"/>
          <p>We all started developing in our favorite languages for passion. That's what moves us!

            We like experimenting and participating in open source projects.

            We like to share our knowledge with customer and developers, during a private meeting with our customer or
            during worldwide developer conferences.

            We like your next project! Would you like to share that with us?</p>
          <h1>Our story</h1>
          <hr class="mb-4"/>
          <p>
            BoostCode was settled in February 2016 by Alex and Matteo, our idea is to provide a smart, flexible, and
            reactive solution for mobile, backend and frontend development.

            Our crew is constantly growing up, adding new talents each time we spot a new one, this helps our customer
            in having always the top notch of the developers available for their projects.

            Our developers have different age of experiences on each technology, our strength is to know each other very
            well, this makes us be reactive and faster in approaching any new project.
          </p>
          <h1>What's important for us</h1>
          <hr class="mb-4"/>
          <p>
            The most important thing is the customer satisfaction, we love to help our customer in every step of the
            project.

            From the design to the release of the software we built.

            Our customer centric approach mixed to agile methodologies, as Scrum, allows us to approach any project in
            the most flexible and proactive way possible.
          </p>
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
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
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

  hr {
    border: 1px solid #2e96db;
  }
</style>
