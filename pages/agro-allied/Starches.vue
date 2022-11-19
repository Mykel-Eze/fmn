<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
                pageTitle="Agro-Allied"
                pageCrumbName="Starches"
                class="agro-allied-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Our journey into the agriculture sector, as a group can be traced back to
                        1978, with the acquisition of a 10,000-hectare farm in Kaboji, Niger state.
                        Since then, we have continued to make substantial investments in several
                        other farms, and downstream activities to support our 5 key value chains of
                        Grains; oils & Fats; Sugar; Feeds & Proteins, and Cassava Starches.
                    </p>
                    <p>
                        <a rel="noopener" href="https://www.fmnagro.com/starches" class="pry-color bold-txt lm-link">
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <AgroAlliedPageSubNav class="starches-page"/>
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar green-bg">
                        <h5>Sugar</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            The value chain is supported by Premium Cassava Products Ltd (downstream)
                            and Shao Golden Farms Limited (upstream) with a present capacity of
                            milling 60mt per day High Quality Cassava Flour (HQCF) and 180mt per day
                            starch production.
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
    import AgroAlliedPageSubNav from '~/components/AgroAlliedPageSubNav';

    export default Vue.extend({
        name: 'AgroInputs',
        components: {
            PageBanner,
            AgroAlliedPageSubNav
        },
        async asyncData({ $axios }) {
            const product = await $axios.get('products?brand=starch');
            return {
                products: product.data,
            };
        },
    });
</script>

<style scoped>
    .product-details {
        border-bottom-color: #65b3b5;
        min-height: 150px;
    }

    /* .product-desc{
        min-height: 210px;
    } */
    @media (max-width: 600px) {
        .product-details{
            min-height: 240px;
        }
    }
</style>

<style>
    @import url('../../assets/css/brands.css');
    @media (min-width: 1200px) {
        .product-details{
            position: relative;
        }
        /* .product-desc p {
            position: absolute;
            bottom: 0;
        } */
    }
</style>
