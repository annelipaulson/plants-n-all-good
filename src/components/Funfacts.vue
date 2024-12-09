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
    <router-link to="/funfacts">Fun Facts</router-link>
    <router-link to="/plant">Plant Care</router-link></div>
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
    justify-content: center;
    align-items: center;
    padding-right:10rem;
  }
  div.nav{
    padding-top: 5rem;
    padding-left:5rem;
    display: flex;
    flex-wrap:nowrap;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }


  a {
    display: flex;
    flex-wrap: nowrap;
    background-color: #00693e;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    font-size: 2rem;
    color: white;
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
    background-color: #00693e;
    margin-left: 10rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
  }
  a:hover {
    color: green;
    background-color: white;
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
@media (width >= 700px) {
  svg{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding-left:30rem;
    padding-bottom:5rem;
  }
  div.funfacts-content {
    display:flex;
    align-content: center;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    font-size: 2rem;
  }
  div.nav {
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    scale:1;
    gap: 5rem;
    padding:2rem;}


  div.funfacts-content p {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    font-family: futura sans-serif;
    color: black;
    padding:5rem;
    font-size:1.5rem;

  }

  h1 {
    display: flex;
    text-align: center;
    border-bottom: lightgrey solid 3px;
    padding-top: 30px;
    flex-direction: row;
    justify-content: center;
    font-family: American typewriter, serif;
    font-size: 5rem;
    color:white;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #00693e;
    margin-left: 10rem;
    margin-bottom:5rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
  }
  a:hover {
    color: green;
    background-color: white;
  }


}




</style>