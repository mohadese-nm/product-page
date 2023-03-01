<template>
  <div class="container">
        <div class="row align-items-center justify-content-center navigation">
            <div class="col link-column">
                <router-link :to="{ name: 'productDescription'}" class="nav-link">
                    معرفی محصول
                </router-link>
            </div>

            <div class="col link-column">
                <router-link :to="{ name: 'productComments'}" class="nav-link">
                    کامنت ها
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productNav'
}
</script>

<style lang="scss" scoped>
    .container{
        .navigation{
            max-width: 300px;
            height: 50px;
            margin: 0 auto;
            .link-column{
                text-align: center;
                padding: 0.5rem 0.5rem;
                max-width: 125px;
                height: 47px;
                .nav-link{
                    max-width: 125px;
                    height: 30px;
                    text-decoration: none;
                    font-size: 16px;
                    &.router-link-active{
                        color: red;
                        box-shadow: 0 2px 0 0 red;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 576px) {
        .container{
            .navigation{
                .link-column{
                    .nav-link{
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>