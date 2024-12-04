<script setup>
import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <h1> Learn <br>More!</h1>
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/funfacts">Fun Facts</router-link>
    </div>
    <div class="plant-content">
      <h5>Plant Spotlight: <br>Monstera <br>(Monstera deliciosa)

        <br><br> <br> Bold, iconic, and instantly recognizable, the Monstera—also known as the Swiss Cheese Plant—is a
        favorite among plant enthusiasts and interior designers alike. Its dramatic, fenestrated leaves make it a
        statement piece that adds tropical elegance to any space.</h5>
      <p>

        <br><b>General Description</b>
        Native to the rainforests of Central and South America, the Monstera is a climbing plant known for its large,
        glossy green leaves with natural splits and holes. These unique perforations help the plant withstand strong
        winds and capture sunlight in its natural habitat. With proper care, Monsteras can grow impressively tall and
        wide, bringing lush greenery to your home.

        <br><b>Sunlight Preferences</b>
        <br>Monsteras thrive in bright, indirect light, mimicking the dappled sunlight of their native rainforest
        floors. They can tolerate lower light conditions but may grow more slowly and develop fewer leaf splits. Avoid
        direct sunlight, which can scorch their leaves.

        <br><b>Watering Needs</b>
        <br>Water your Monstera when the top 1-2 inches of soil feel dry to the touch. It prefers consistently moist but
        not soggy soil. Overwatering can lead to root rot, so ensure the pot has adequate drainage. During the cooler
        months, reduce watering frequency as growth slows down.

        <br><b>Quick Care Tips</b>

        <br><b>Humidity:</b> Loves higher humidity but adapts well to standard indoor conditions; mist occasionally to
        boost moisture.
        <br><b>Temperature:</b> Thrives in temperatures between 65-85°F and dislikes cold drafts.
        <br><b>Soil:</b> Use a well-draining potting mix, ideally one with peat or coco coir for added aeration.
        <br><b> Fertilizer:</b> Feed every 4-6 weeks during the growing season with a balanced liquid fertilizer.
        <br><b> Support:</b> As a natural climber, Monsteras appreciate a moss pole or trellis for support as they grow.

        <br><b>Fun Fact</b>
        The Monstera’s unique leaf holes have earned it the nickname “Swiss Cheese Plant.” These fenestrations are
        believed to help the plant capture light more efficiently and withstand tropical storms in the wild.

        <br>Whether you’re creating an indoor jungle or adding a touch of sophistication to your space, the Monstera is
        an iconic choice that’s both stunning and surprisingly easy to care for.


      </p>
      <h5>Plant Spotlight: <br>The Aloe Plant</h5>
      <h5><br><br><b> Say hello to the Aloe plant, a timeless favorite known for its soothing gel and striking,
        architectural appearance. Native to arid regions, Aloe plants are not only a beautiful addition to your home but
        also a functional one, with their gel often used for skin soothing and hydration.</b></h5>
      <p>

        <br><b>General Description</b>
        Aloe plants are succulents with thick, fleshy leaves that grow in a rosette pattern. Their green or gray-green
        leaves often have small, white speckles or spiny edges, adding a unique texture to any space. Among the many
        species, Aloe vera is the most famous, celebrated for its medicinal properties and ease of care.

        <br><b>Sunlight Preferences</b>
        Aloes love bright, indirect light and can even thrive in direct sunlight for a few hours a day. A sunny
        windowsill—preferably south or west-facing—is ideal. If placed outdoors, protect them from harsh afternoon
        sunlight to prevent leaf scorching.

        <br><b>Watering Needs</b>
        As a drought-tolerant succulent, Aloe plants prefer the “soak and dry” method: thoroughly water them, then let
        the soil dry out completely before watering again. Overwatering is their biggest enemy, so ensure their pot has
        proper drainage. In winter, reduce watering frequency as the plant enters a resting phase.

        <br><b>Quick Care Tips</b>

        <br><b>Humidity:</b> Thrives in dry conditions; no need for extra humidity.
        <br><b>Temperature:</b> Enjoys warm temperatures between 55-80°F and doesn’t tolerate frost.
        <br><b>Soil:</b> Use well-draining cactus or succulent soil for best results.
        <br><b>Fertilizer:</b> Feed with a cactus fertilizer once in spring and summer for growth.
        Whether you’re looking for a hardy plant, a natural first-aid kit, or a statement piece for your home, the Aloe
        plant is a perfect choice. Its low-maintenance nature and unique look make it a favorite among beginners and
        seasoned plant lovers alike.

      </p>
      <h5>Plant Spotlight: <br>Money Tree <br>(Pachira aquatica)
        <br><br><br>The Money Tree is a symbol of good fortune and positive energy, making it a cherished addition to
        homes and offices around the world. With its braided trunk and vibrant green leaves, this tropical beauty is as
        stylish as it is meaningful.</h5>
      <p>

        <br><b>General Description</b>
        Native to Central and South America, the Money Tree is a fast-growing plant that can adapt to a variety of
        indoor environments. Its five-lobed leaves are said to represent the elements of balance, and its braided trunk
        adds a unique decorative touch. It’s not only beautiful but also an excellent air purifier, promoting a fresher
        and calmer space.

        <br><b>Sunlight Preferences</b>
        Money Trees thrive in bright, indirect light but can tolerate lower light conditions, making them versatile for
        many settings. Avoid direct sunlight, which can scorch their leaves, but make sure they get enough light to
        maintain their vibrant green color.

        <br><b>Watering Needs</b>
        The Money Tree prefers consistent watering, but its roots should never sit in water. Allow the top 1-2 inches of
        soil to dry out before watering again. During the growing season (spring and summer), water more frequently, but
        reduce watering in the cooler months. Always ensure the pot has good drainage.

        <br><b>Quick Care Tips</b>

        <br><b>Humidity:</b> Enjoys high humidity but adapts well to standard indoor levels; occasional misting can
        help.
        <br><b>Temperature:</b> Thrives in temperatures between 65-80°F and dislikes drafts or extreme temperature
        changes.
        <br><b>Fertilizer:</b> Feed monthly during spring and summer with a balanced liquid fertilizer.
        <br><b>Pruning:</b> Trim any yellow or dead leaves to keep the plant looking its best.
        The Money Tree is not only a joy to care for but is also thought to bring prosperity and harmony to your space.
        Whether you’re looking for a thoughtful gift or a new addition to your plant collection, this resilient and
        symbolic plant is a winner.

      </p>


    </div>


  </primary-template>
</template>

<style scoped>
@media (width <= 500px) {
  div.nav {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 15rem;
    padding-bottom: 5rem;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-right: 20rem;
    font-family: "American Typewriter", serif;
    font-size: 5rem;
  }

  div.plant-content h5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 50px;
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
    font-size: 3rem;
    color: white;
  }

  div.plant-content p {
    display: flex;
    align-content: center;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    font-size: 4rem;
  }
}


@media (width >= 500px) {
  div.plant-content {
    display: flex;
    align-content: center;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    font-size: 5rem;
  }

  div.plant-content h5 {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 50px;
    color: black;
  }

  div.nav {
    display: flex;
    flex-direction: row;
    scale: 1;
    gap: 5rem;
    padding-bottom: 5rem;
    align-content: center;
  }

  div.plant-content h3 {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "American Typewriter", serif;
    font-size: 1.5rem;
    color: black;
    padding: 5rem;
  }

  div.plant-content p {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    font-family: futura sans-serif;
    color: black;
    padding: 5rem;
    font-size: 1.5rem;

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
    color: white;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: sandybrown;
    margin-left: 10rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
    border: lightgrey solid 3px;
    border-radius: 10px;
    padding: 20px;
    font-size: 2rem;
    color: white;
  }


}


</style>