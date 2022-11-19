<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
                pageTitle="Support Services"
                pageCrumbName="Support Services"
                class="logistics-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Apart from Food Business and the Agro Allied Industry, we own a
                        segment in the logistics and support nerve that connects businesses
                        and industries. Our investment and contribution to the smooth
                        running of the various chains and webs of businesses in the economy
                        chains and networks is several companies strong.
                    </p>
                    <p>
                        <a rel="noopener" href="https://bagco-ng.com" target="_blank" class="pry-color bold-txt lm-link">
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <LogisticsPageSubNav class="bagco-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <div class="title-bar green-bg">
                        <h5>Bagco</h5>
                    </div>
                    <div class="short-desc-txt">
                        <p>
                            BAGCO, a division of Flour Mill of Nigeria (FMN PLC) is recognized
                            to be Africa’s largest and leading manufacturer of premium bags
                            sustained through state of the art machinery, professional staff
                            and best manufacturing practices.
                        </p>
                        <p>
                            With over 42 years heritage, BAGCO has become the leading
                            packaging solution & manufacturing brand known to supply Quality
                            Polypropylene (PP) sacks in Nigeria to support the industrial and
                            agricultural sectors of Nigeria to support the industrial and
                            agricultural sectors of Nigerian economy. We provide Total
                            Packaging Solutions from PP bags to flexible packaging materials.
                            We also have the capability of providing in excess of 32 million
                            bags per month to key sectors of the economy.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div class="pr-div" v-for="item in products"
                            :key="item.id">
                            <div class="product-img">
                              <div :style="{ backgroundImage: 'url(' + item.image.url + ')' }"></div>
                                <!-- <img
                                    :src="item.image.url" :alt="item.name"
                                    class="full-width"
                                /> -->
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    {{ item.name }}
                                </div>
                                <div class="product-desc" v-html="item.description">
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
    import LogisticsPageSubNav from '~/components/LogisticsPageSubNav.vue';

    export default Vue.extend({
        name: 'LogisiticsAndSupport',
        components: {
            PageBanner,
            LogisticsPageSubNav
        },
        head: {
            title: 'SUPPORT SERVICES',
            meta: [
                {
                    name: 'description',
                    content: 'Apart from Food Business and the Agro Allied Industry, we own a segment in the logistics and support nerve that connects businesses and industries. Our investment and contribution to the smooth running of the various chains and webs of businesses in the economy chains and networks is several companies strong.'
                },
                {
                    name: 'keywords',
                    content: 'Bagco Super Sack,Sack Bag Manufacturers in Nigeria,Bag Manufacturing Companies in Nigeria,Jute Bags Manufacturers in Nigeria,Rice Packaging Bags,Manufacturers in Nigeria'
                }
            ]
        },
        async asyncData({ $axios }) {
            const product = await $axios.get('products?brand=bagco');
            return {
                products: product.data,
            };
        },
    });
</script>

<style scoped>
    @import url('../assets/css/brands.css');
    .green-bg {
        background-color: #80c442;
    }

    .product-details {
        border-bottom-color: #80c442;
        min-height: 200px;
    }
    @media (max-width: 600px) {
        .product-details{
            min-height: 260px !important;
        }
    }
</style>


<!--<style src="~/assets/css/brands.css"></style>-->
