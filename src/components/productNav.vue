<template>
  <div class="container">
        <div class="row align-items-center navigation">
            <div class="col link-column">
                <router-link :to="{ name: 'productDescription' , params:{id: product.id} }" class="nav-link">
                    معرفی محصول
                </router-link>
            </div>

            <div class="col link-column">
                <router-link :to="{ name: 'productComments' , params:{id: product.id} }" class="nav-link">
                    کامنت ها
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productNav',
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
</style>