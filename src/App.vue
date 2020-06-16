<template>
  <div id="app">
    <header-application/>
    <body-application/>
  </div>
</template>

<script>
import HeaderApplication from "@/components/HeaderApplication";
import BodyApplication from "@/components/Body";

export default {
  name: 'App',
  components: {
    HeaderApplication, BodyApplication
  }
}
</script>

<style>
</style>
