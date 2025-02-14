<template>
    <div>
         <div class="art-page">
            <h1 class="page-title">Artworks</h1>
                <div class="art-grid">
                    <div v-for="(art, index) in artworks" :key="index" class="art-item">
                    <img :src="art.image" alt="Artwork" class="art-img" />
                    <div class="art-info">
                        <h2 class="art-title">{{ art.title }}</h2>
                        <p class="art-artist">Artist: {{ art.artist }}</p>
                        <p class="art-price">{{ art.price }}₭</p>
                        <div class="art-actions">
                          <router-link :to="{ name: 'ArtDetail', params: { id: index } }">
                            <button class="shop-button">Shop</button>
                          </router-link>
                             <span class="heart" @click="toggleFavorite(index)">
                                {{ art.liked ? "❤️" : "🤍" }}
                            </span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  </template>
  
  <script>
export default {
  name: "ArtPage",
  data() {
    return {
      artworks: [
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-7110_okh9a_430684011.jpeg",
          title: "Mother & Child",
          artist: "Laura Dunning",
          price: "650.000",
          liked: false,
        },
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8088/108/1000x1000_1643f688-b4fd-4380-80bd-c487bdb6af65_x5drd_470392180.jpeg",
          title: "Spring Frenzy",
          artist: "Bryan Duncan",
          price: "750.000",
          liked: false,
        },
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-7546_y5bhe_1898398070.jpg",
          title: "Cafe Lights in Paris ",
          artist: "Eugenia Gorbacheva",
          price: "600.000",
          liked: false,
        },
         // New artworks for an extra row:
         {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_6a7149df-388c-49b2-8c6d-736eeb992434_vp5ve_1500422045.jpeg",
          title: "Mystical Nights",
          artist: "Joan Vincent",
          price: "500.000",
          liked: false,
        },
        {
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVOv8yCq2d_RSDzYcggUjRIfDrN5FqY-MGw&s",
         title: "VILLAGE   ",
         artist: "Sonja Brzak",
          price: "750.000",
          liked: false,
        },
        {
          image  : "https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/27/1000x1000_dscf0201_46s0e_293750840.jpg",
          title  : "Beyond the red planet",
          artist  : "James Lancaster",
          price: "400.000",
          liked: false,
        },
        // New artworks for an extra row:
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/1000x1000_img-1146_w4zyd_607292256.jpeg",
          title: "On Brownsea Island",
          artist: "Christine Ingram",
          price: "500.000",
          liked: false,
        },
        {
          image  : "https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/99/img-3659_z7azc_852371124.jpg",
          title  : "oceans Embrace",
          artist  : "Norman Reay",
          price: "750.000",
          liked: false,
        },
        {
          image: "https://imgc.allpostersimages.com/img/posters/sandra-poliakov-birds-couple_u-l-q1t44m10.jpg",
          title: "Birds Couple",
          artist: "Sandra Poliakov",
          price: "400.000",
          liked: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(index) {
      this.artworks[index].liked = !this.artworks[index].liked;
    },
  },
};
</script>

  
  <style scoped>
  .art-page {
    padding: 40px 20px;
    text-align: center;
  }
  
  .page-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .art-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* four columns per row */
  gap: 30px;
  justify-items: center;
}

  
  .art-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 15px;
    max-width: 300px;
    max-height:480px;
  }
  
  .art-img {
    width: 100%;
    height: 60%;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .art-img:hover {
    transform: scale(1.05);
  }
  
  .art-info {
    padding: 10px 0;
  }
  
  .art-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .art-artist {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 10px;
  }
  
  .art-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #f39c12;
  }
  
  .art-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  
  .shop-button {
    background-color: #f39c12;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .shop-button:hover {
    background-color: #e67e22;
  }
  
  .heart {
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .heart:hover {
    transform: scale(1.2);
  }
  </style>
   