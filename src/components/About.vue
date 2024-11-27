<script setup>
import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>
    <h1> About Us!</h1>

    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#ffffff" width="200px" height="200px" viewBox="0 -0.06 33.834 33.834" xmlns="http://www.w3.org/2000/svg">

      <g transform="translate(-95.748 -577)">

        <path d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"/>

        <path d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"/>

      </g>

    </svg>
    <div class="nav">
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link></div>
<div class="about-content">
  <h3>Welcome to Plants & All</h3>


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
  svg {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.nav{
    display: flex;
    flex-direction:column;
    gap: 1rem;
  }

  h1 {
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 5rem;
  }

  div.about-content h3 {
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
    margin-right: 15rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
  }


  div.about-content {
    margin: 3rem;
    padding:3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
  }
  div.about-content p{
    text-align: left;
    color: black;
    margin: 30px;
    font-family: futura serif;
    font-size: 2rem;
  }
}




@media (width >= 800px) {

  div.about-content {
    display: flex;
    margin: 5rem;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    font-size: 2rem;
  }

  div.nav {
    display: flex;
    flex-direction: row;
    scale: 1;
  }


  div.about-content h3 {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "American Typewriter", serif;
    font-size: 3rem;
    color: black;
  }

  div.about-content p {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    font-family: futura sans-serif;
    color: black;
    font-size: 3rem;
  }

  h1 {
    display: flex;
    text-align: center;
    padding-left: 150px;
    border-bottom: lightgrey solid 3px;
    padding-top: 30px;
    flex-direction: row;
    justify-content: center;
    font-family: American typewriter, serif;
    font-size: 5rem;
    color: white;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: sandybrown;
    margin-left: 10rem;
    margin-right: 15rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
    font-family: "American Typewriter", serif;
  }
}
</style>