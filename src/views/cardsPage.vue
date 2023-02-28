<template>
<div class="container">
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name">
            <p>{{ product.name }}</p>
        </div>
    </div>
    <div class="footer">
        <p>فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین</p>
        <p id="about">درباره ما</p>
    </div>
</div>
</template>

<script>
export default {
    name : 'cardsPage',
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
        padding: 2vh 3vw;
        max-width: 800px;
        margin: 0 auto;
        .product-list {
            display: grid;
            grid-template-columns: repeat(4, minmax(auto, 800px));
            grid-gap: 1rem;
            .product-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 18px 12px;
                background: #ffffff;
                flex: none;
                border-radius: 12px;
                transition: 0.2s ease-in-out;

                &:hover{
                    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.1);
                }

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 5px;
                }
                p{
                    margin-top: 6px;
                }
            }
        }
        .footer {
            width: 100%;
            max-width: 800px;
            background-color: #ffffff;
            border-radius: 12px 12px 0 0;
            margin-top: 1rem;
            padding: 2rem 0;
            text-align: center;
            #about{
                opacity: .7;
            }
        }
    }
</style>