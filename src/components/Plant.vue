<script setup>
import Card from "/components/.Card.vue";
import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
<h1> Learn More About the Plants!</h1>
    <div class="nav"><router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link></div>
    <div class="plant-content">
      <h5>Plant Spotlight: Monstera (Monstera deliciosa)</h5>
<p>
  Bold, iconic, and instantly recognizable, the Monstera—also known as the Swiss Cheese Plant—is a favorite among plant enthusiasts and interior designers alike. Its dramatic, fenestrated leaves make it a statement piece that adds tropical elegance to any space.

  General Description
  Native to the rainforests of Central and South America, the Monstera is a climbing plant known for its large, glossy green leaves with natural splits and holes. These unique perforations help the plant withstand strong winds and capture sunlight in its natural habitat. With proper care, Monsteras can grow impressively tall and wide, bringing lush greenery to your home.

  Sunlight Preferences
  Monsteras thrive in bright, indirect light, mimicking the dappled sunlight of their native rainforest floors. They can tolerate lower light conditions but may grow more slowly and develop fewer leaf splits. Avoid direct sunlight, which can scorch their leaves.

  Watering Needs
  Water your Monstera when the top 1-2 inches of soil feel dry to the touch. It prefers consistently moist but not soggy soil. Overwatering can lead to root rot, so ensure the pot has adequate drainage. During the cooler months, reduce watering frequency as growth slows down.

  Quick Care Tips

  Humidity: Loves higher humidity but adapts well to standard indoor conditions; mist occasionally to boost moisture.
  Temperature: Thrives in temperatures between 65-85°F and dislikes cold drafts.
  Soil: Use a well-draining potting mix, ideally one with peat or coco coir for added aeration.
  Fertilizer: Feed every 4-6 weeks during the growing season with a balanced liquid fertilizer.
  Support: As a natural climber, Monsteras appreciate a moss pole or trellis for support as they grow.
  Fun Fact
  The Monstera’s unique leaf holes have earned it the nickname “Swiss Cheese Plant.” These fenestrations are believed to help the plant capture light more efficiently and withstand tropical storms in the wild.

  Whether you’re creating an indoor jungle or adding a touch of sophistication to your space, the Monstera is an iconic choice that’s both stunning and surprisingly easy to care for.


</p>
      <h5>Plant Spotlight: The Aloe Plant</h5>
      <p>
        Say hello to the Aloe plant, a timeless favorite known for its soothing gel and striking, architectural appearance. Native to arid regions, Aloe plants are not only a beautiful addition to your home but also a functional one, with their gel often used for skin soothing and hydration.

        General Description
        Aloe plants are succulents with thick, fleshy leaves that grow in a rosette pattern. Their green or gray-green leaves often have small, white speckles or spiny edges, adding a unique texture to any space. Among the many species, Aloe vera is the most famous, celebrated for its medicinal properties and ease of care.

        Sunlight Preferences
        Aloes love bright, indirect light and can even thrive in direct sunlight for a few hours a day. A sunny windowsill—preferably south or west-facing—is ideal. If placed outdoors, protect them from harsh afternoon sunlight to prevent leaf scorching.

        Watering Needs
        As a drought-tolerant succulent, Aloe plants prefer the “soak and dry” method: thoroughly water them, then let the soil dry out completely before watering again. Overwatering is their biggest enemy, so ensure their pot has proper drainage. In winter, reduce watering frequency as the plant enters a resting phase.

        Quick Care Tips

        Humidity: Thrives in dry conditions; no need for extra humidity.
        Temperature: Enjoys warm temperatures between 55-80°F and doesn’t tolerate frost.
        Soil: Use well-draining cactus or succulent soil for best results.
        Fertilizer: Feed with a cactus fertilizer once in spring and summer for growth.
        Whether you’re looking for a hardy plant, a natural first-aid kit, or a statement piece for your home, the Aloe plant is a perfect choice. Its low-maintenance nature and unique look make it a favorite among beginners and seasoned plant lovers alike.

      </p>
      <h5>Plant Spotlight: Money Tree (Pachira aquatica)</h5>
<p>The Money Tree is a symbol of good fortune and positive energy, making it a cherished addition to homes and offices around the world. With its braided trunk and vibrant green leaves, this tropical beauty is as stylish as it is meaningful.

  General Description
  Native to Central and South America, the Money Tree is a fast-growing plant that can adapt to a variety of indoor environments. Its five-lobed leaves are said to represent the elements of balance, and its braided trunk adds a unique decorative touch. It’s not only beautiful but also an excellent air purifier, promoting a fresher and calmer space.

  Sunlight Preferences
  Money Trees thrive in bright, indirect light but can tolerate lower light conditions, making them versatile for many settings. Avoid direct sunlight, which can scorch their leaves, but make sure they get enough light to maintain their vibrant green color.

  Watering Needs
  The Money Tree prefers consistent watering, but its roots should never sit in water. Allow the top 1-2 inches of soil to dry out before watering again. During the growing season (spring and summer), water more frequently, but reduce watering in the cooler months. Always ensure the pot has good drainage.

  Quick Care Tips

  Humidity: Enjoys high humidity but adapts well to standard indoor levels; occasional misting can help.
  Temperature: Thrives in temperatures between 65-80°F and dislikes drafts or extreme temperature changes.
  Fertilizer: Feed monthly during spring and summer with a balanced liquid fertilizer.
  Pruning: Trim any yellow or dead leaves to keep the plant looking its best.
  The Money Tree is not only a joy to care for but is also thought to bring prosperity and harmony to your space. Whether you’re looking for a thoughtful gift or a new addition to your plant collection, this resilient and symbolic plant is a winner.

</p>






    </div>











  </primary-template>
</template>

<style scoped>
@media (width <= 500px) {
  div.nav{
    display: flex;
    flex-direction:column;
    gap: 1rem;
  }

  h1{
    margin:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family:"American Typewriter", serif;
    font-size: 5rem;
  }
  div.plant-content h5{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size:50px;
    color:black;
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
  div.plant-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    font-family: futura serif;
    font-size: 1rem;
    color:black;
    margin: 3rem;
    padding:3rem;
  }
}





@media (width >= 500px) {
  div.nav{
    display: flex;
    flex-direction:row;
    gap: 1rem;
    margin-bottom:10rem;
  }
  h1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family:American typewriter, serif;
    font-size: 5rem;
  }
  div.plant-content h5{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size:3rem;
    color:black;
  }
  div.plant-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    font-family: futura sans-serif;
    font-size:2rem;
    color:black;
    margin: 100px;
    padding:100px;

  }
  h1 {
    display: flex;
    text-align: center;
    padding-left:150px;
    border-bottom: lightgrey solid 3px;
    padding-top:30px;
    font-family: "American Typewriter", serif;
    font-size: 3rem;
    color: white;
  }
  a {
    display: flex;
    flex-wrap:wrap;
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
  }


}


</style>