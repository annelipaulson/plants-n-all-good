<script setup>
import PrimaryTemplate from "../Templates/PrimaryTemplate.vue"
defineProps({
  plantName: {
    type: String,
    required: true,
  },
plantCare: {
    type: String,
    required: true,},
  plantRegion:{
    type: String,
    required: true,
  }



})
</script>

<template>
  <primary-template>
    <section class="cards">
      <aside>
        <p class="plantName">{{ plantName }}</p>
          <p class="plantCare">{{ plantCare }}</p>
        <p class="plantRegion">{{plantRegion}}</p>
         <br> <router-link to="/plant">Click Here for More Plant Care Information</router-link>
      </aside>
    </section>
  </primary-template>
</template>

<style scoped>
@media (width <= 500px) {


  aside {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background-color: #00693e;;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 2.5rem;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    margin-top: 2rem;

  }
  aside:hover {
    color: white;
    background-color: white;
  }

  a {
    display: flex;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 2rem;
    padding-right: 2rem;
  }

  section.cards {
    display: flex;
    align-items: center;

  }


  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right: 35px;
    flex-wrap: nowrap;
    font-family: "American Typewriter", serif;
    color: white;
    font-size: 2rem;

  }

  p:hover {
    color: green;
  }
}

@media (width >= 700px) {
  aside {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background-color: #00693e;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding-left: 2.5rem;
    padding-bottom: 5rem;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    margin-left: 3.5rem;
    margin-right: 3.5rem;
    margin-top: 2rem;
    margin-bottom: 5rem;


  }
  aside:hover {
    color: white;
    background-color: lightgrey;
  }

  a {
    display: flex;
    font-family: "American Typewriter", serif;
    font-size: 2rem;
    padding-right: 2rem;
  }


  p {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right: 35px;
    font-family: "American Typewriter", serif;
    color: white;
    font-size: 2rem;

  }

  p:hover {
    color: green;
  }
}


</style>