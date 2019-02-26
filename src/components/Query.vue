<template>
    <ul>
      <li v-for="item of msglist">
        <div>
          <pre>{{item.name}}    {{item.age}}  <a v-bind:href="'#/update?id='+item.id">更新</a>  <a href="" @click.prevent="delmsg(item.id)">删除</a></pre>
        </div>
      </li>
    </ul>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Query",
      data () {
          return {
            msg:{
              name:'',
              age:''
            },
            msglist:[]
          }
      },
      created() {
           axios.get('http://127.0.0.1:3000/list').then(res=>{this.msglist=res.data;console.log(this.msglist)})

      },
      methods:{
        async delmsg (id) {
          const index = this.msglist.findIndex((item)=>item.id==id)
          this.msglist.splice(index,1)
           await axios.delete(`http://127.0.0.1:3000/list/${id}`)
        }
      }
    }
</script>

<style scoped>

</style>
