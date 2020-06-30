<template>
  <div class="About">
    <h1>{{ message }}</h1>

    <img src="../../image/imagenDev.jpg">
      <p> Idade : 20 anos
          Estudando tecnologia da informação a um ano e meio

     </p>
     <p>
       dev java full-stack web
     </p>



  </div>
</template>

<script>
export default {
  name: 'About',
  props: {

    message: String,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
