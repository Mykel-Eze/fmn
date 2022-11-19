<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Sugar"
            pageCrumbName="Sugar"
            class="sugar-page"
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
                            href="https://www.fmnfoods.com/our-brands/sugar/"
                            target="_blank"
                            class="pry-color bold-txt lm-link"
                        >
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <!-- <BrandsPageSubNav class="sugar-page" /> -->
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <div class="title-bar green-bg">
                        <h5>Sugar</h5>
                    </div>
                    <div class="short-desc-txt">
                        <p>
                            With about ten thousands hectares of sugarcane
                            plantation and one of the most advanced refineries
                            in the world, FMN has boosted the local production
                            of the sweetest of the nation’s staple food.
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
                                <div
                                    class="product-desc"
                                    v-html="item.description"
                                ></div>
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

export default Vue.extend({
    name: 'Sugar',
    components: {
        PageBanner,
    },
    head: {
        title: 'SUGAR',
        meta: [
            {
                name: 'description',
                content: 'With about ten thousands hectares of sugarcane plantation and one of the most advanced refineries in the world, FMN has boosted the local production of the sweetest of the nation’s staple food.'
            },
            {
                name: 'keywords',
                content: 'Sugar Processing Company in Nigeria,Sugar Distributor,Sunti,Sunti Sugar'
            }
        ]
    },
    async asyncData({ $axios }) {
        const product = await $axios.get('products?brand=sugar');
        return {
            products: product.data,
        };
    },
});
</script>

<style scoped>
@import url('../assets/css/brands.css');
.green-bg {
    background-color: #428452;
}

.product-details {
    border-bottom-color: #428452;
    min-height: 150px;
}

.pr-div {
    margin-bottom: 20px;
}

@media (max-width: 600px) {
    .product-details {
        min-height: 180px;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
