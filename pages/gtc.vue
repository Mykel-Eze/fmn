<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Logistics & Support"
            pageCrumbName="Logistics & Support"
            class="logistics-page"
        />
        <!--=== end of Page Banner Section ===-->

        <div class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Apart from Food Business and the Agro Allied Industry,
                        we own a segment in the logistics and support nerve that
                        connects businesses and industries. Our investment and
                        contribution to the smooth running of the various chains
                        and webs of businesses in the economy chains and
                        networks is several companies strong.
                    </p>
                    <p>
                        <a
                            rel="noopener"
                            href="https://bagco-ng.com"
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
        <LogisticsPageSubNav class="gtc-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar yellow-bg">
                        <h5>Golden Transport Company</h5>
                    </div> -->
                    <div class="short-desc-txt col s12">
                        <div class="col s12 m4 pad0-xs">
                            <div class="sdt-img-div">
                                <div></div>
                            </div>
                        </div>
                        <div class="col s12 m8 pad0-xs">
                            <div class="text-justify-xs">
                                <p>
                                    Golden Transport Company (GTC) Limited
                                    though formally incorporated as a company in
                                    2008, has been in operations right from the
                                    inception of Flour Mills Nigeria Plc. It has
                                    established effective nationwide haulage and
                                    distribution networks that enable sister
                                    company’s products to reach their customers
                                    on time and in excellent condition.
                                </p>
                                <p>
                                    Golden Transport Company Limited has a
                                    dynamic history, its operations started as a
                                    Fleet Operations Department of FMN. By 1992,
                                    the Department was strengthened with the
                                    purchase of 46 BMC Fatih trucks. By 1998,
                                    the department was equipped with 203
                                    Mercedes Benz V-6 trucks.
                                </p>
                                <p>
                                    By 2005, an arrangement to convert the Fleet
                                    Operations Division to a fully-fledged
                                    company with its own structure was concluded
                                    and on April 1st, 2008; the company started
                                    as a separate corporate personality – Golden
                                    Transport Company Limited.
                                </p>
                                <p>
                                    Golden Transport Company Limited maintained
                                    the Iganmu and Imam Dauda premises until
                                    April 2010 when the company shifted its new
                                    corporate Headquarter to Gbagada. The
                                    company currently operates with a total of
                                    500 trucks (Mercedes Benz-Iveco and HOWO)
                                    with plans of increasing the fleet to 1000
                                    trucks by 2015. To improve the fleet
                                    efficiency and to have a better control of
                                    its operations, GTC invested in very
                                    intelligent tracking devices for its fleet.
                                </p>
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
        LogisticsPageSubNav,
    },
    head: {
        title: 'SUPPORT SERVICES',
        meta: [
            {
                name: 'description',
                content:
                    'Apart from Food Business and the Agro Allied Industry, we own a segment in the logistics and support nerve that connects businesses and industries. Our investment and contribution to the smooth running of the various chains and webs of businesses in the economy chains and networks is several companies strong.',
            },
            {
                name: 'keywords',
                content:
                    'Bagco Super Sack,Sack Bag Manufacturers in Nigeria,Bag Manufacturing Companies in Nigeria,Jute Bags Manufacturers in Nigeria,Rice Packaging Bags,Manufacturers in Nigeria',
            },
        ],
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
.yellow-bg {
    background-color: #f9d200;
}

.sdt-img-div > div {
    background-color: white;
    float: left;
    width: 100%;
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/brands/Golden-Transport.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100%;
    margin-top: 20px;
    border-radius: 18px;
}

@media (max-width: 600px) {
    .sdt-img-div > div {
        margin-top: 0;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
