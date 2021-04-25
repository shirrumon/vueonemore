<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-9 col-md-5 home"><h4>BLOG</h4></div>
    </div>
    <Item
    v-for="bg in blog.articles" :key="bg.title"
    v-bind:blg="bg" />
  </div>
</template>

<script>
import Item from '@/components/Blogitem.vue'
export default {
  name: 'Blog',
  props: ['blog'],
  components: {
    Item
  }
}

</script>

<style scoped>
.home{
  padding-top: 3%;
}

@media(max-width: 640px)
{

  .home{
    padding-top: 10%;
  }
}
</style>
