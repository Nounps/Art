<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Our Art Gallery</h1>
      <p>Explore the world of art</p>
    </section>

    <section class="featured-art">
      <h2>Best seller in 2025</h2>
      <div class="art-grid">
        <div v-for="(art, index) in artworks" :key="index" class="art-item">
          <img :src="art.image" alt="Artwork" class="art-img " />
          <p class="art-title">{{ art.title }}</p> <!-- Add this line to display the title -->
          <p class="art-artist">{{ art.artist }}</p>
          <p class="art-price">{{ art.price }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      artworks: [
      { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 
       title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        price: "2.000.000.000 kip",
       },
       { image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-7110_okh9a_430684011.jpeg",
        title: "Mother & child  ",
        artist: "Laura Dunning",
        price: "650.000 kip",
       },  
       { image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-7123_ra7lz_1782794227.jpeg",
        title: "The dreamer",
        artist: "Laura Dunning",
        price: "670.000 kip",
       },  
       { image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_throughthearch_zca72_1258238527.jpg",
        title: "Mediterranean view through an archway",
        artist: "Maureen Greenwood",
        price: "800.000 kip",
       },
       // Ensure you provide a valid image path here
      ],
    };
  },
};

</script>

<style scoped>
.hero {
  background-image: url('https://woodstockschoolofart.org/wp-content/uploads/2023/11/image0-17.jpeg'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px; /* Adjust padding to ensure content is centered */
  height: 500px; /* Set height for the hero section */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7); /* Optional: add text shadow for better visibility */
}

.hero h1 {
  font-size: 4rem; /* Adjust the size for the main heading */
  font-weight: bold;
}

.hero p {
  font-size: 2em;
  font-weight: bold;
}

.featured-art {
  padding: 40px 20px;
}
.featured-art h2 {
  text-align: center;
  font-size: 2.5rem; /* Adjust the size if needed */
  font-weight: bold;
  margin-bottom: 20px; /* Add spacing below the heading */
}


.art-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.art-item {
  padding: 0; /* Remove padding around each item */
}

.art-img {
  width: 100%; /* Make sure image scales properly */
  height: 80%;
  transition: transform 0.3s;
  
}

.art-img:hover {
  transform: scale(1.1);
}
.art-title {
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px; /* Space between image and text */
  color: #333; /* Adjust color for better readability */
}

</style>
