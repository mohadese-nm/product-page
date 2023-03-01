<template>
  <div class="container">
    <div class="row comments">
        <div v-for="comment in commentsList" :key="comment.index" class="col comment">
            <p class="text">{{ commentsList.comment }}</p>
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
          commentsList: this.product.comments
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
        .comments{
            .comment{
                .text{
                    text-align: start;
                    font-size: 14px;
                }
            }
        }
    }
</style>