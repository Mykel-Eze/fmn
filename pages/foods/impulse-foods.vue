<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Foods"
            pageCrumbName="Impulse Foods"
            class="impulse-page food1-page"
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
                            href="https://www.eagleflour.com"
                            class="pry-color bold-txt lm-link"
                        >
                            Learn More &#10095; &#10095;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!--=== Sub Navigation Section ===-->
        <BrandsPageSubNav class="impulse-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar blue-bg">
                        <h5>Impulse Foods</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            A subsidiary of FMN, Golden Penny has become a
                            trusted brand in Nigeria and with over five decades
                            of providing quality products. FMN has transferred
                            this knowledge to produce a great range of
                            high-quality impulse foods for your delight
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/impulse-foods/Marios BBQ.png"
                                    alt="Marios BBQ"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Marios BBQ
                                </div>
                                <div class="product-desc">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/impulse-foods/Marios Cheese Balls.png"
                                    alt="Marios Cheese Balls"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Marios Cheese Balls
                                </div>
                                <div class="product-desc">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/impulse-foods/Golden bite Chin-Chin.png"
                                    alt="Golden bite Chin-Chin"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Golden Bite Chin-Chin
                                </div>
                                <div class="product-desc">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/impulse-foods/Kool 2-Go.png"
                                    alt="Kool 2-Go"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Kool 2-Go
                                </div>
                                <div class="product-desc">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor.
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
import PageBanner from '~/components/PageBanner.vue';
import BrandsPageSubNav from '~/components/BrandsPageSubNav';
import Vue from 'vue';

export default Vue.extend({
    name: 'ImpulseFoods',
    components: {
        PageBanner,
        BrandsPageSubNav,
    },
});
</script>

<style scoped>
@import url('../../assets/css/brands.css');
.product-details {
    border-bottom-color: #65b3b5;
}
@media (max-width: 600px) {
    .product-details {
        min-height: 200px !important;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
