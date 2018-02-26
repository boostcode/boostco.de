<template>
    <v-app id="inspire">
        <bc-menu />
        <bc-header/>
        <v-content>
            <router-view/>
        </v-content>
        <bc-footer/>
    </v-app>
</template>

<script>
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
import Menu from './components/partials/Menu.vue'

export default {
  components: {
    'bc-menu': Menu,
    'bc-header': Header,
    'bc-footer': Footer
  },
  name: 'App'
}
</script>
