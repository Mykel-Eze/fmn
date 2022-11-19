<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Foods"
            pageCrumbName="Ball Foods"
            class="ballFoods-page food2-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Our products make the menus of homes and cafeterias all
                        across the nation and beyond. Demanded and consumed by
                        millions in millions of metric tonnes every single day,
                        we meet demands for good food and affordable nutrition.
                    </p>
                    <p>
                        <a
                        rel="noopener"
                            href="https://www.fmnfoods.com/our-brands/ball-foods/"
                            class="pry-color bold-txt lm-link"
                            target="_blank"
                        >
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <BrandsPageSubNav class="ballFoods-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar green-bg">
                        <h5>Ball Foods</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            From Semovita to Massavita, our ball foods need very
                            little introduction. Trademarks of good living, they
                            score very high points across cultures and tribes
                            that have now owned them.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div
                            class="pr-div"
                            v-for="item in products"
                            :key="item.id"
                        >
                            <div class="product-img">
                              <div :style="{ backgroundImage: 'url(' + item.image.url + ')' }"></div>
                                <!-- <img
                                    :src="item.image.url"
                                    :alt="item.name"
                                    class="full-width"
                                /> -->
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    {{ item.name }}
                                </div>
                                <div class="product-desc">
                                    <p v-html="item.description"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
import BrandsPageSubNav from '~/components/BrandsPageSubNav';

export default Vue.extend({
    name: 'BallFoods',
    components: {
        PageBanner,
        BrandsPageSubNav,
    },
    async asyncData({ $axios }) {
        const page = await $axios.get('pages?title=Management');
        const product = await $axios.get('products?brand=ball');
        return {
            products: product.data,
            about: page.data[0].content,
        };
    },
});
</script>

<style scoped>
@import url('../../assets/css/brands.css');
.product-img {
  padding: 20px;
}
.product-details {
    min-height: 150px;
    border-bottom: 3px solid #83c38e;
}

.pr-div {
    margin-bottom: 20px;
}

@media (max-width: 600px) {
    .product-details {
        min-height: 250px;
    }
}
</style>
