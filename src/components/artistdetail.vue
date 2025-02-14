<template>
    <div class="artist-detail">
      <div class="artist-container">
        <div class="art-info">
          <div class="artist-info">
             <img :src="art.image" alt="Artist" class="art-image" />
            <div>
              <h3>{{ art.artist }}</h3>
              <p class="artist-badge">{{ art.badge }}</p>
            </div>
          </div>
          <h1>{{ art.title }}</h1>
          <!-- <p class="medium">{{ art.medium }}</p> -->
          <p class="description">{{ art.description }}</p>
          <div class="details">
            <p><strong>Name</strong> {{ art.name }}</p>
            <!-- <p><strong>Interests</strong> {{ art.interest}}</p> -->
            <p><strong>History</strong> {{ art.history }}</p>
          </div>
          <!-- <div class="social-icons">
            <button>Share</button>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArtistDetail",
    data() {
      return {
        artists: [
          // ... (same artist data as in ArtistPage, or fetched from an API)
          
        ],
        art: {
          image: 'https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg',
          name:'Leonardo da Vinci',
         


        },

  };
      
    },
    computed: {
      artist() {
        const index = this.$route.params.id;
        return this.artist[index] || {};
      },
    },
  };
  </script>
  <style scoped>
  .artist-container {
    display: flex;
    gap: 20px;
    max-width: 1000px;
    margin: auto;
  }

  .art-info {
    flex: 1;
  }
  .artist-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .artist-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .description {
    margin-top: 20px;
  }
  </style>