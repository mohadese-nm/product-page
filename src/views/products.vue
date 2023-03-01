<template>
<div class="container">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center product-list">
        <div v-for="product in products" :key="product.id" class="col product-card">
                <router-link :to="{name: 'productDetails', params:{id: product.id}}" class="card product-link">
                    <img :src="product.image" :alt="product.name" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">{{ product.name }}</p>
                    </div>
                </router-link>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name : 'products',
    data(){
        return{
            products : []
        }
    },
    mounted() {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style lang="scss" scoped>
    .container{
        margin: 0 auto;
        .product-list {
            max-width: 800px;
            margin: 0 auto;
            .product-card {
                display: inline-block;
                padding: 10px 7px;
                background: #ffffff;
                border-radius: 12px;
                transition: 0.2s ease-in-out;
                max-width: 170px;
                height: 240px;
                margin-bottom: 10px;
                margin-left: 10px;

                &:hover{
                    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.1);
                }

                .product-link{
                    text-decoration: none;
                    color: black;
                    img {
                    width: 100px;
                    height: 100px;
                    border-radius: 5px;
                    }
                    p{
                        margin-top: 6px;
                    }
                }
                .card{
                    border: none;
                    .card-body{
                        padding: 6px;
                    }
                }
            }
        } 
    }
</style>