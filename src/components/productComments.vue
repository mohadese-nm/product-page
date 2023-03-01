<template>
  <div class="container">
    <div class="row comments">
        <div v-for="comment in product.comments" :key="comment.index" class="col-12 comment">
            <p class="text">{{ comment }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'productComments',
    props: ['id'],
    data() {
      return {
          product: {},
        }
    },
    mounted() {
      fetch('http://localhost:3000/products/' + this.id)
        .then(res => res.json())
        .then(data => this.product= data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 0;
        margin: 0;
        .comments{
            .comment{
                background-color: #ffff;
                border-radius: 12px;
                margin-bottom: 6px;
                padding: 12px;
            }
        }
    }
</style>