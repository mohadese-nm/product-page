<template>
  <div class="container">
    <div class="row product-card">
      <div class="col-12 product-name">
        <p>{{ product.name }}</p>
      </div>
      <div class="col-12 product-detail">
        <div class="row align-items-center">
          <div class="col product-img">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="col product-info">
            <div class="row info">
              <div class="col-12 product-nav">
                  <div class="row align-items-center navigation">
                    <div class="col link-column">
                        <router-link :to="{ name: 'productDescription'}" class="nav-link">
                            معرفی محصول
                        </router-link>
                    </div>

                    <div class="col link-column">
                        <router-link :to="{ name: 'productComments' }" class="nav-link">
                            کامنت ها
                        </router-link>
                    </div>
                  </div>
              </div>
              <div class="col-12 product-text">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
    name: 'productDetails',
  props: ['id'],
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
      .product-detail{
        min-height: 500px;
        .product-img{
          max-width: 250px;
          img{
            max-width: 240px;
          }
        }
        .product-info{
          max-width: 550px;
          .info{
            min-height: 480px;
            .product-nav{
              .navigation{
                  max-width: 300px;
                  height: 50px;
                  .link-column{
                      text-align: center;
                      padding: 0.5rem 0.5rem;
                      max-width: 118px;
                      height: 47px;
                      .nav-link{
                          text-decoration: none;
                          font-size: 14px;
                          &.router-link-active{
                              .link-column{
                                  box-shadow: 0 2px 0 0 red;
                                  .nav-link{
                                      color: red;
                                  }
                              }
                          }
                      }
                  }
              }
            }
          }
        }
      }
    }
  }
</style>