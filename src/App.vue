<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-wechat-title="$route.meta.title" />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
/* body{
  overflow: hidden;
} */
</style>
