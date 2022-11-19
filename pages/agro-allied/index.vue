<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Agro-Allied"
            pageCrumbName="Feeds & Proteins"
            class="agro-allied-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Our journey into the agriculture sector, as a group can
                        be traced back to 1978, with the acquisition of a
                        10,000-hectare farm in Kaboji, Niger state. Since then,
                        we have continued to make substantial investments in
                        several other farms, and downstream activities to
                        support our 5 key value chains of Grains; oils & Fats;
                        Sugar; Feeds & Proteins, and Cassava Starches.
                    </p>
                    <p>
                        <a
                            rel="noopener"
                            href="https://www.fmnagro.com/feeds-and-proteins"
                            class="pry-color bold-txt lm-link"
                        >
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <AgroAlliedPageSubNav class="feedsproteins-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar teal-bg">
                        <h5>Feeds & Proteins</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            This is our model 10,000 hectares' farm in Niger
                            State. Our objectives at the farm include primarily
                            producing maize and soy bean using quality inputs,
                            world class management practices and showcasing the
                            potential of commercial agriculture. With the
                            support of our out-grower schemes, the model farm
                            supplies our feed, edible oil and food value chains
                            with much needed raw materials.
                        </p>
                        <p>
                            We have invested up to N15billion in the companies
                            supporting this value chain. These companies have
                            the combined capacity of employing about 2,000
                            direct workers with an additional 10,000 indirect
                            workers. Potentially, we hope to be able to save up
                            to USD$180million foreign exchange in through our
                            localization effort.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <!-- <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/feeds/Maize Grower.png"
                                    alt="Maize Grower"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">Maize Grower</div>
                                <div class="product-desc">
                                    It is a continuity of Layer mash and
                                    mainly designed for farmers who are
                                    looking to optimize their resources.
                                    As the hen ages, the thickness of the
                                    egg shell usually declines and calcium
                                    mobilization decreases to less than
                                    50%. Layer phase 2 will help solve this.
                                    It is to be fed from 40weeks upwards.
                                    <p>
                                        <b>Available Size: </b> 25kg
                                    </p>
                                </div>
                            </div>
                        </div> -->
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
import AgroAlliedPageSubNav from '~/components/AgroAlliedPageSubNav';

export default Vue.extend({
    name: 'AgroAllied',
    components: {
        PageBanner,
        AgroAlliedPageSubNav,
    },
    head: {
        title: 'AGRO-ALLIED',
        meta: [
            {
                name: 'description',
                content:
                    'Our journey into the agriculture sector, as a group can be traced back to 1978, with the acquisition of a 10,000-hectare farm in Kaboji, Niger state. Since then, we have continued to make substantial investments in several other farms, and downstream activities to support our 5 key value chains of Grains; oils & Fats; Sugar; Feeds & Proteins, and Cassava Starches.',
            },
            {
                name: 'keywords',
                content:
                    'Agricultural Processing,Agricultural Processing Companies,Feed Sales,Fish Feed,Poultry Feed,Top Feed,Best Poultry Feed,Best Fish Feed,Feed Distributor in Nigeria,Fertilizer Sales in Nigeria,Fertilizer Company,Fertilizer Distributor,',
            },
        ],
    },
    async asyncData({ $axios }) {
        const product = await $axios.get('products?brand=feed');
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
    .product-details {
        min-height: 290px !important;
    }
}
</style>

<style>
@import url('../../assets/css/brands.css');
@media (min-width: 1200px) {
    .product-details {
        position: relative;
    }
    /* .product-desc p {
            position: absolute;
            bottom: 0;
        } */
}
</style>
