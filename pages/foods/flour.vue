<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Foods"
            pageCrumbName="Flour"
            class="flour-page food3-page"
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
                            href="https://www.fmnfoods.com/our-brands/flour/"
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
        <BrandsPageSubNav class="flour-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar teal-bg">
                        <h5>Flour</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            With a daily wheat grinding capacity of 8,000 metric
                            tonnes, FMN controls one of the largest flour
                            milling complexes in the world. The superior quality
                            Golden Penny Flour, is available is different
                            variants and has delighted millions all over Nigeria
                            and beyond. Packaged in various sizes, it is
                            distributed as Nigeria’s number one flour for
                            baking.
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
    name: 'Flour',
    components: {
        PageBanner,
        BrandsPageSubNav,
    },
    async asyncData({ $axios }) {
        const product = await $axios.get('products?brand=flour');
        return {
            products: product.data,
        };
    },
});
</script>

<style scoped>
@import url('../../assets/css/brands.css');
.product-details {
    border-bottom-color: #65b3b5;
    min-height: 200px;
}
@media (max-width: 600px) {
    .product-details {
        min-height: 230px;
    }
}
</style>

<style>
.product-desc p {
    font-size: 11px;
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
