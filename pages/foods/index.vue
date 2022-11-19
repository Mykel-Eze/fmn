<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Foods"
            pageCrumbName="Golden Penny Foods"
            class="pastanoodles-page food1-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Since the early sixties, when FMN was incorporated as
                        the premier flour miller in Nigeria, our Golden Penny
                        Food brand has remained a household name, providing
                        great tasting and nourishing food to millions of
                        Nigerian families. For over 60 years, we continue to
                        bring families together at the dining table with smiles
                        and a great food. Explore a selection of some of our
                        products.
                    </p>
                    <p>
                        <a
                            rel="noopener"
                            href="https://www.fmnfoods.com/our-brands/pasta/"
                            target="_blank"
                            style="cursor: pointer;"
                            class="pry-color bold-txt lm-link"
                        >
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <BrandsPageSubNav class="pastanoodles-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar lemon-bg">
                        <h5>Pasta & Noodles</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            Golden Penny Pasta is Nigeria’s no. 1 pasta made
                            from the finest quality Durum which makes it high in
                            fibre and rich in protein. Golden Penny Pasta is
                            fortified with vitamin A and supplies your body with
                            the vitality to get through the day.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div
                            class="pr-div"
                            v-for="item in products"
                            :key="item.id"
                        >
                            <div class="product-img">
                                <div
                                    :style="{
                                        backgroundImage:
                                            'url(' + item.image.url + ')',
                                    }"
                                ></div>
                                <!-- <img
                                    :src="item.image.url" :alt="item.name"
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
    name: 'PastaAndNoodles',
    components: {
        PageBanner,
        BrandsPageSubNav,
    },
    head: {
        title: 'FOODS',
        meta: [
            {
                name: 'description',
                content:
                    'Golden Penny Food brand has remained a household name, providing great tasting and nourishing food to millions of Nigerian families. For over 60 years, we continue to bring families together at the dining table with smiles and a great food. Explore a selection of some of our products.',
            },
            {
                name: 'keywords',
                content:
                    'Food Processing Industry in Nigeria,Flour and Milk Recipes,Flour Brands in Nigeria,Best Flour in Nigeria,How to Make Pancakes with Flour?,Wheat Flour, Food production during COVID,Food production environmental impact,Food production business,Strategies for enhancement in food production,Sustainable food production,Food processing and preservation,',
            },
        ],
    },
    async asyncData({ $axios }) {
        const page = await $axios.get('pages?title=Management');
        const product = await $axios.get('products?brand=pasta');
        return {
            products: product.data,
            about: page.data[0].content,
        };
    },
    methods: {
        scrollDown() {
            document
                .getElementById('products-wrapper')
                .scrollIntoView({ behavior: 'smooth' });
        },
    },
});
</script>

<style scoped>
@import url('~assets/css/brands.css');
.product-img {
    padding: 20px;
}
.product-details {
    border-bottom: 3px solid #80c442;
    min-height: 220px;
}
@media (max-width: 600px) {
    .product-details {
        min-height: 270px;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
