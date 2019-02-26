<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view></router-view>
<app-footer></app-footer>
  </div>
</template>

<script>
  import {Header} from 'mint-ui'
import AppFooter from './components/footer'
  console.log(Header);
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    components:{
      'mt-header':Header,
      AppFooter,
    },
    props:[],
    methods:{

      }
  }
</script>

<style>

</style>
