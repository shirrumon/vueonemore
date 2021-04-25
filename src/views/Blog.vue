<template>
  <div class="container-fluid">
    <Blog
    v-bind:blog="blogmass"
    />
  </div>
</template>

<script>
import Blog from '@/components/Blogview.vue'
export default {
  name: 'Blog2',
  data() {
    return {
      blogmass: []
    }
  },
  mounted() {
    fetch('https://guarded-beyond-81767.herokuapp.com/api/blog')
      .then(response => response.json())
      .then(json => {
        this.blogmass = json
      })
  },
  components: {
    Blog
  }
}
</script>
