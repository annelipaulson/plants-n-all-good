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
  a {
    display: flex;
    flex-wrap: nowrap;
    background-color: sandybrown;
    margin-left: 3.5rem;
    margin-right: 15rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 1rem;
    color: white;
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
    a {
      display: flex;
      flex-wrap: nowrap;
      background-color: sandybrown;
      margin-left: 3.5rem;
      margin-right: 15rem;
      margin-top: 2rem;
      border: lightgrey solid 3px;
      border-radius: 10px;
      padding: 20px;
      font-size: 3rem;
      color: white;
    }
    x



  section.main {
    align-items: center;
      background-color: darkolivegreen;
  }



}
</style>