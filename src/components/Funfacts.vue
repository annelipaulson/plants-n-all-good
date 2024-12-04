<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
</script>
<template>
  <primary-template>
  <h1> Fun Facts!</h1>
  <div class="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/funfacts">Fun Facts</router-link></div>
  <div class="funfacts-content">


    <p>We're a passionate community of plant enthusiasts dedicated to helping people transform their spaces into lush, green sanctuaries.
      <br> <br><b>Our mission is simple: to make plant care accessible, enjoyable, and rewarding for everyone, whether you're a seasoned plant parent or just starting out.</b>

      <br><br>At Plants & All the, we believe that plants can bring warmth, beauty, and balance to any environment. Our team is here to provide expert tips, curated plant selections, and personalized care advice to help your plants thrive. From indoor jungles to low-maintenance succulents, we’ve got something for every lifestyle and space.
      <br><br><b> Join us in growing a greener, more vibrant world—one plant at a time</b>



    </p>










  </div>
</primary-template>
</template>

<style scoped>
@media (width<= 500px) {
  svg{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-left:130px;
    padding-right:130px;
    padding-bottom: 5rem;
  }
  div.nav{
    padding-top:5rem;
    display: flex;
    flex-direction:column;
    gap: 1rem;
    padding-right:15rem;
    padding-bottom:5rem;
  }

  h1 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 3rem;
    color: white;
  }

  div.funfacts-content h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 1rem;
    color: black;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: sandybrown;
    margin-left: 10rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
  }


  div.funfacts-content {

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 7rem;
  }
  div.funfacts-content p{
    text-align: left;
    color: black;
    font-family: futura serif;
    font-size:1rem;
  }
}



</style>