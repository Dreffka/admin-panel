<template>
  <div class="container mx-auto my-3 flex justify-center relative">
    <div class="">
      <Content/>
    </div>
    
    <div class=" ">
      <SideMenu/>
    </div>
  </div>
</template>


<script>
import Content from './components/Content.vue'
import SideMenu from './components/SideMenu.vue'

export default {
  components: {
    Content,
    SideMenu
  }
}
</script>

<style>
  body {
    margin: 0 auto;
    background-color: #FBFBFB;
    color: #2E2E2E;
    font-family: 'Montserrat', sans-serif;
  }
  button:focus {
    outline: none !important;
  }
</style>

