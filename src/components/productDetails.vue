<template>
  <div class="container">
    <div class="row product-card">
      <div class="col-12 product-name">
        <p>{{ product.name }}</p>
      </div>
      <div class="col-12 product-nav">
        <product-nav></product-nav>
      </div>
      <div class="col-12 product-detail">
        <div class="row align-items-center justify-content-center">
          <div class="col-md product-img">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="col-md product-info">
              <router-view></router-view>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import productNav from './productNav.vue';
export default {
    name: 'productDetails',
  props: ['id'],
  components:{productNav},
    data() {
      return {
          product: {}
        }
    },
    mounted() {
      fetch('http://localhost:3000/products/' + this.id)
        .then(res => res.json())
        .then(data => this.product = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style lang="scss" scoped>
  .container{
    max-width: 800px;
    margin: 0 auto;
    .product-card{
      margin: 0 auto;
      .product-name{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
      .product-nav{
        text-align: center;
        padding: 0 37px;
        height: 50px;
      }
      .product-detail{
        min-height: 350px;
        .product-img{
          max-width: 230px;
          text-align: center;
          img{
            max-width: 215px;
          }
        }
        .product-info{
          max-width: 550px;
          margin-right: 10px;
          padding: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    
  }
</style>