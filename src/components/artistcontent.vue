<template>
    <div>
         <div class="artist-page">
            <h1 class="page-title">Artist</h1>
            <p class="text-center mb-6">Explore the best-loved art of all time, created by these highly recognizable modern art masters. </p>
                <div class="artist-grid">
                    <div v-for="(art, index) in artists" :key="index" class="artist-item">
                    <img :src="art.image" alt="Artist" class="artist-img" />
                    <div class="artist-info">
                        <h2 class="artist-title">{{ art.title }}</h2>
                        <div class="artist-actions">
                          <router-link :to="{ name: 'Artistdetail', params: { id: index } }">
                            <button class="see-button">See</button>
                          </router-link>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  </template>
  
  <script>
export default {
  name: "ArtistPage",
  data() {
    return {
      artists: [
        {
          
          image: "https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg",
          title: "Leonardo da Vinci",
        },
        {
          image: "https://imgc.artprintimages.com/img/print/sandra-poliakov-midnight-reading_u-l-q1t5sq50.jpg?artHeight=550&artPerspective=n&artWidth=550&background=fbfbfb",
          title: "Sandra Poliakov ",
        },
        {
          image: "https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg",
          title: "Vincent van Gogh",
        },
        {
          image: "https://excellenceartgallery.com/wp-content/uploads/2018/11/thumbnail_thumbnail_img_5925.jpg",
          title: "Sonja Brzak"
        },
        {
          image  : "https://www.saatchiart.com/saatchi-s3/1086678/profile/KZKJMLKZ_avatar_medium_square.jpg",
          title  : "Eugenia Gorbacheva",

        },
        // New artist for an extra row:
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-6945_jj7h9_1213279128.jpeg",
          title: "Laura Dunning",
        },
        {
          image  : "https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-8153_jfx6h_1859568305.jpeg",
          title  : "Joan Vincent",
        },
        {
          image: "https://cdn.kreezalid.com/kreezalid/556408/files/998045/bryanduncan1_661679e6f1bd7.jpg",
          title: "Birds Couple",
        },
      ],
    };
  },
  methods: {
    Artist(art) {
      alert(`You clicked Shop for ${art.title}!`);
    },
  },
};
</script>

  
  <style scoped>
  .artist-page {
    padding: 40px 20px;
    text-align: center;
  }
  
  .page-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .artist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three columns per row */
  gap: 30px;
  justify-items: center;
}

  
  .artist-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
    
    max-width: 300px;
    max-height: 480px;
  }
  
  .artist-img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .artist-img:hover {
    transform: scale(1.05);
  }
  
  .artist-info {
    padding: 10px 0;
  }
  
  .artist-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .artist-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  
  .see-button {
    background-color: #f39c12;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .see-button:hover {
    background-color: #e67e22;
  }
  
  

  </style>
   