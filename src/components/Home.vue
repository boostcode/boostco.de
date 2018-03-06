<template>
  <v-container grid-list-xl fluid fill-height>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm12 md10 xl10 class="text-xs-center">
        <p>
          <b>BoostCode</b> is a team of freelance frontend, backend, and mobile developers
        </p>
        <p>
          Since 2016 we helped more than 18 companies around the world in building their awesome projects.
        </p>
      </v-flex>
      <v-flex xs10 sm12 md4 xl4>
        <h2>👨‍💻 Services</h2>
        <div class="mt-1 pa-2">
          <p><b>Development</b> that's why you are here! A full team of full-stack developers ready to help you.</p>
          <p><b>Mobile Security</b> Assessment are you sure your apps are secure? We can help you testing your
            applications against the most commonly used flaws.</p>
          <p><b>Project Management</b> we take care of your projects, using Scrum methodologies with our a well-knit
            team of professionals.</p>
          <p><b>Technical Interviews</b> we help companies and startup in finding the best candidates.</p>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md4 xl4>
        <h2>⌚️📱💻 Technologies</h2>
        <p>We study hard to try to use the best technologies in the market, at this very moment we can support you
          on:</p>
        <div class="mt-1 pa-2">
          <h4>iOS</h4>
          <em>Objective-C</em>, <em>Swift</em>
          <h4>Android</h4>
          <em>Java</em>, <em>Kotlin</em>
          <h4>Backend</h4>
          <em>PHP</em>, <em>NodeJS</em>, <em>Python</em>, <em>Java</em>
          <h4>Frontend</h4>
          <em>AngularJS</em>, <em>VueJS</em>, <em>jQuery</em>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md10 xl10>
        <h2>Latest Projects</h2>
        <hr/>
        <template v-for="project in projects">
          <project :project="project" limit="2" v-bind:key="project.name"></project>
        </template>
      </v-flex>
      <v-flex xs12 sm12 md4 xl4 class="mt-4 mb-4">
        <hr/>
        <div class="mt-1 pa-2">
          <h1>🏷 89+ projects
            published</h1>

          <p>BoostCode was able to help more than 18 companies since 2016, supporting them in designing and developing
            more than 89 applications so far.</p>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md4 xl4>
        <hr/>
        <div class="mt-1 pa-2">
          <h1>📱 Mobile
            development</h1>

          <p>BoostCode loves mobile applications, we usually develop native apps in Objective-C, Swift, Java or Android.
            We developed so far B2C and B2B apps both.</p>

        </div>
      </v-flex>
      <v-flex xs12 sm12 md4 xl4>
        <hr/>
        <div class="mt-1 pa-2">
          <h1>🖥 Backend
            development</h1>

          <p>BoostCode has different skills in backend app development. PHP, NodeJS, Python, and Java are our favorite
            scripting and programming languages to do this job.</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import Project from './partials/Project'

  export default {
    name: 'Home',
    components: {
      'project': Project
    },
    data: () => ({
      projects: []
    }),
    watch: {
      '$route': 'fetchData'
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        axios.get('http://localhost:8080/static/projects.json')
            .then((resp) => {
              console.log(resp.data)
              this.projects = resp.data.projects.slice(0, 2)
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

  h2 {
    color: #2e96db;
  }

  hr {
    border: 1px solid #2e96db;
  }
</style>
