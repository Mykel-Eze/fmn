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
        <LogisticsPageSubNav class="abtl-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <div class="title-bar teal-bg">
                        <h5>Apapa Bulk Terminal Limited</h5>
                    </div>
                    <div class="short-desc-txt col s12">
                        <div class="col s12 m4 pad0-xs">
                            <div class="sdt-img-div">
                                <div></div>
                            </div>
                        </div>
                        <div class="col s12 m8 pad0-xs">
                            <div class="text-justify-xs">
                                <p>
                                    Apapa Bulk Terminal Limited (ABTL) was
                                    incorporated on the 5th of May, 2005 with a
                                    share capital of 1Billion Naira. It is a
                                    fully owned subsidiary of FMN Plc set up as
                                    a Special Purpose Vehicle (SPV) to take
                                    advantage of the concession granted by
                                    Nigerian Ports Authority/Bureau of Public
                                    Enterprises to manage and operate Terminals
                                    A and B of the Apapa Port Complex.
                                </p>
                                <p>
                                    Apapa Bulk Terminal Limited provides a
                                    spectrum of facilities in terms of
                                    consolidations, warehousing, open storage
                                    areas, packing, repair facilities and even
                                    office complexes. In doing so, it continues
                                    to add tremendous value to the logistics
                                    chain and in meeting the expectation of port
                                    users and stakeholders by offering services
                                    such as:
                                </p>
                                <ul class="dotted-list">
                                    <li>
                                        Transit warehousing for import and
                                        export cargo
                                    </li>
                                    <li>
                                        Bonded warehousing, which enables
                                        importers to store cargo and ask for
                                        partial releases, thereby deferring duty
                                        payment
                                    </li>
                                    <li>
                                        Network cargo distribution and delivery
                                    </li>
                                </ul>
                                <p>
                                    The key value it offers is, the provision of
                                    the most convenient single-window facility
                                    that can coordinate with all the different
                                    agencies and services involved in the bulk
                                    and break bulk cargo trade.
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
.teal-bg {
    background-color: #65b3b5;
}

.sdt-img-div > div {
    background-color: white;
    float: left;
    width: 100%;
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/brands/abtl.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100%;
    margin-top: 20px;
    border-radius: 18px;
}
ul.dotted-list > li {
    font-size: 14px;
}

@media (max-width: 600px) {
    .sdt-img-div > div {
        margin-top: 0;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
