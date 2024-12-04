<script setup>

</script>

<template>
  <section class="primary-template">
    <section class="main">
      <slot></slot>
    </section>

    <footer>

    </footer>
  </section>
</template>

<style scoped>
@media (width <=500px) {

  section.primary-template {
    display: flex;
    flex-direction: column;
    font-family: "American Typewriter", serif;
    background-color: darkolivegreen;
  }

  section.main {
    align-items: center;
    background-color: darkolivegreen;
  }


}
  @media (width >500px){
    section.primary-template {
      background-color: darkolivegreen;
      display: flex;
      flex-direction: row;
      font-family: "American Typewriter", serif;

    }




  section.main {
    align-items: center;
      background-color: darkolivegreen;
  }



}
</style>