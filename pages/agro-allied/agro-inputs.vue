<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
                pageTitle="Agro-Allied"
                pageCrumbName="Agro Inputs & Distribution"
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
                        <a rel="noopener" href="https://www.fmnagro.com/agro-input" class="pry-color bold-txt lm-link">
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <AgroAlliedPageSubNav class="agroinputs-page"/>
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper-2">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar teal-bg">
                        <h5>Fertilizers</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            Golden Fertilizer Company Limited was established as a wholly
                            owned subsidiary of Flour Mills of Nigeria Plc (FMN) in 1997 with
                            fertilizer blending, distribution and supply as its core business.
                            Today, through the efforts of a skilled and dedicated team, the
                            Golden Fertilizer Company has evolved into one of the leading
                            companies within the agro-allied supply chain in the country.
                        </p>
                        <p>
                            With a capacity of 450,000MTPA, blending facility in Lagos &
                            Kaduna and a wide distribution network, Golden Fertilizer Company
                            Ltd. has continued to flourish in Nigeria as the farmers’ friend
                            with its flagship brand “Golden Fertilizer” providing an array of
                            blended NPK variants, special blends as required by individuals or
                            corporate customers, an effective distribution network and
                            insurance for its quality fertilizers. This insurance is a
                            partnership between PULA and LEADWAY Assurance ensuring
                            compensation for a shortfall in expected yield on the area planted
                            by the farmer. We are also participating in the Federal
                            Government’s Presidential fertilizer initiative which provides
                            fertilizers to farmers at a subsidized rate.
                        </p>
                        <p>
                            The Golden Fertilizer Company recognizes the role of a robust
                            fertilizer regime for Nigeria’s re-emerging agricultural sector
                            and for the past thirteen years, has remained fully committed to
                            supporting Nigeria’s Agro-Allied industry, with top quality
                            products and services.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div class="pr-div" v-for="item in products"
                            :key="item.id">
                            <div class="product-img">
                              <div :style="{ backgroundImage: 'url(' + item.image.url + ')' }"></div>
                                <!-- <img
                                  :src="item.image.url" :alt="item.name"
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
            const product = await $axios.get('products?brand=fertilizer');
            return {
                products: product.data,
            };
        },
    });
</script>

<style scoped>
    .product-details {
        border-bottom-color: #65b3b5;
        min-height: 250px;
    }

    #products-wrapper-2 .product-details {
        border-bottom-color: #83c38e;
        min-height: 150px;
    }

    #products-wrapper-2 {
        margin-bottom: 30px;
    }

    /* .product-desc{
        min-height: 210px;
    } */
    @media (max-width: 600px) {
        .product-details{
            min-height: 200px !important;
        }
    }
</style>

<style>
    @import url('../../assets/css/brands.css');
    @media (min-width: 1200px) {
        .product-details{
            position: relative;;
        }
        /* .product-desc p {
            position: absolute;
            bottom: 0;
        } */
    }
</style>
