<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/query" tag="li"><a>查询</a></router-link>
      <router-link to="/add" tag="li"><a>新增</a></router-link>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="https://v3.bootcss.com/examples/dashboard/">Nav item again</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">One more nav</a></li>
      <li><a href="https://v3.bootcss.com/examples/dashboard/">Another nav item</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>
