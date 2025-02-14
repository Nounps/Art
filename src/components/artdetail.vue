<template>
  <div class="art-detail">
    <div class="art-container">
      <img :src="art.image" alt="Artwork" class="art-image" />
      <div class="art-info">
        <div class="artist-info">
          <img :src="art.artistImage" alt="Artist" class="artist-image" />
          <div>
            <h3>{{ art.artist }}</h3>
            <p class="artist-badge">{{ art.badge }}</p>
          </div>
        </div>
        <h1>{{ art.title }}</h1>
        <!-- <p class="medium">{{ art.medium }}</p> -->
        <h2 class="price">₭{{ art.price }}</h2>
        <button class="buy-button">BUY NOW</button>
        <button class="wishlist-button" @click="toggleWishlist">{{ isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist' }}</button>
        <p class="description">{{ art.description }}</p>
        <div class="details">
          <p><strong>Material:</strong> {{ art.material }}</p>
          <p><strong>Dimensions:</strong> {{ art.dimensions }}</p>
          <p><strong>Style:</strong> {{ art.style }}</p>
          <p><strong>Subject:</strong> {{ art.subject }}</p>
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
  name: "ArtDetail",
  data() {
    return {
      artworks: [
        // ... (same artwork data as in ArtPage, or fetched from an API)
      ],
      isWishlisted: false,
      art: {
        image: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-7110_okh9a_430684011.jpeg',
        artistImage: 'https://cdn.kreezalid.com/kreezalid/556408/catalog/8100/9/1000x1000_img-6945_jj7h9_1213279128.jpeg',
        material:'',
        dimensions:'12 x 12 inch',
      },
      methods: {
    toggleWishlist() {
      this.isWishlisted = !this.isWishlisted;
    }
  }
};
    
  },
  computed: {
    art() {
      const index = this.$route.params.id;
      return this.artworks[index] || {};
    },
  },
};
</script>
<style scoped>
.art-container {
  display: flex;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}
.art-image {
  width: 50%;
  height: auto;
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
.price {
  font-size: 24px;
  color: #d32f2f;
}
.buy-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.wishlist-button {
  background-color: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
}
.description {
  margin-top: 20px;
}
</style>