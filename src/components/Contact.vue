<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <h1> Contact Us!</h1>



    <div class="nav">
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link></div>
</primary-template>
    <div class="contact-content">
      <h3>We're here to help you with all your plant-related needs! Whether you have questions about plant care, need help with an order, or want to give us feedback, our team at Plants & All the is ready to assist.</h3>


<p>
        Get in Touch

        Email Us For general inquiries, support, or product questions, email us at: <b>support@plantsandall.com</b>
<br>
        <b>Call Us</b> Our customer support line is available Monday to Friday, <br>9:00 AM - 6:00 PM (EST):<br>📞 +1 (123) 456-7890
       <br> Follow Us on Social MediaStay connected with us for the latest plant care tips, new arrivals, and inspiration:
       <br> <br><b>Instagram: @plantsandall</b>
      <br><b> Facebook: @plantsandall</b><br/>
      <b>  Twitter: @plantsandall</b>

      <br>  Mailing Address Plants & All the 123 Greenhouse Lane Botanic City, ST 12345
        Frequently Asked Questions Check our FAQ page for quick answers to common questions.
       <br> <br><b>Need More Help?</b> If you don’t see what you need, feel free to reach out using our contact form below. We’ll get back to you as soon as possible!
      </p>






    </div>

</template>

<style scoped>
@media (width<= 500px) {
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

  div.contact-content h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "American Typewriter", serif;
    font-size: 3rem;
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


  div.contact-content {
    margin: 3rem;
    padding:3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
  }
div.contact-content p{
  text-align: left;
  color: black;
  margin: 30px;
  font-family: futura serif;
  font-size: 2rem;
}
}




@media (width >= 500px) {
  div.contact-content {
    display:flex;
    margin:5rem;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    font-size: 2rem;
  }
  div.nav {
    display: flex;
    flex-direction: row;
    scale:1;}


  div.contact-content h3 {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "American Typewriter", serif;
    font-size: 3rem;
    color: black;
  }

  div.contact-content p {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    font-family: futura sans-serif;
    color: black;

    font-size:3rem;

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
    color:white;
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
  }


}



</style>