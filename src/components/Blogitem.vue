<template>
  <div class="row itemblg">
    <div class="col">
      <hr>
      <h5>{{ blg.title }}</h5>
      <p>{{ blg.text }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    blg: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.itemblg{
  text-align: left;
  padding: 5%;
}

.itemblg h5{
  text-align: left;
}
</style>
