<template>
  <div>
    <v-container grid-list-xl fluid fill-height>
      <v-layout row wrap align-top justify-center>
        <v-flex xs12 sm12 md10 xl10 class="text-xs-center">
          <p>
            <b>BoostCode</b> is a team of freelance frontend, backend, and mobile developers
          </p>
          <p>
            Since {{ marketing.since }} we helped more than {{ marketing.companies }} companies around the world in
            building their awesome
            projects.
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-xl fluid fill-height>
      <v-layout row wrap align-top justify-center>
        <v-flex xs10 sm12 md4 xl4>
          <h2>👨‍💻 Services</h2>
          <div class="mt-1 pa-2">
            <p>
              <b>Development</b> that's why you are here! A full team of full-stack developers ready to help you.
            </p>
            <p>
              <b>Mobile Security</b> Assessment are you sure your apps are secure? We can help you testing your
              applications against the most commonly used flaws.
            </p>
            <p>
              <b>Project Management</b> we take care of your projects, using Scrum methodologies with our a well-knit
              team of professionals.
            </p>
            <p>
              <b>Technical Interviews</b> we help companies and startup in finding the best candidates.
            </p>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md4 xl4>
          <h2>⌚️📱💻 Technologies</h2>
          <p>
            We study hard to try to use the best technologies in the market, at this very moment we can support you
            on:
          </p>
          <div class="mt-1 pa-2">
            <template v-for="tech in technologies">
              <h4 v-bind:key="tech.name">{{ tech.name }}</h4>
              <em v-for="framework in tech.frameworks" v-bind:key="framework">{{ framework }}</em>
            </template>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-xl fluid fill-height>
      <v-layout row wrap align-top justify-center>
        <template v-for="badge in badges">
          <v-flex xs12 sm12 md4 xl4 class="mt-4 mb-4" v-bind:key="badge.title">
            <div class="mt-1 pa-2">
              <h1>{{ badge.title }}</h1>
              <hr>
              <p class="mt-2">{{ badge.text }}</p>
            </div>
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    marketing: {
      since: 2016,
      companies: 18,
      projects: 89
    },
    badges: [
      {
        title: '🏷 Projects published',
        text:
          'BoostCode helped so far a spreading number of companies, startups and digital agencies in developing native solutions.'
      },
      {
        title: '📱 Mobile development',
        text:
          'BoostCode loves mobile applications, we usually develop native apps in Objective-C, Swift, Java or Android. We developed so far B2C and B2B apps both.'
      },
      {
        title: '🖥 Backend development',
        text:
          'BoostCode has different skills in backend app development. PHP, NodeJS, Python, and Java are our favorite scripting and programming languages to do this job.'
      }
    ],
    technologies: [
      {
        name: 'Mobile',
        frameworks: [
          'iOS native (Objective-C, Swift),',
          'Android native (Java, Kotlin)',
          'Flutter'
        ]
      },
      {
        name: 'Backend',
        frameworks: ['NodeJS,', 'PHP,', 'WordPress,', 'WooCommerce,', 'Parse']
      },
      {
        name: 'Frontend',
        frameworks: ['AngularJS,', 'VueJS,', 'jQuery']
      }
    ]
  }),
  watch: {},
  created () {},
  methods: {}
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
