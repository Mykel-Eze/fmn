<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Foods"
            pageCrumbName="Oil & Spreads"
            class="oilandspreads-page food2-page"
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
                            href="https://www.fmnfoods.com/our-brands/oil-and-spreads/"
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
        <BrandsPageSubNav class="oilandspreads-page" />
        <!--=== end of Sub Navigation Section ===-->

        <section id="products-wrapper">
            <div class="row">
                <div class="container">
                    <!-- <div class="title-bar yellow-bg">
                        <h5>Oil And Spreads</h5>
                    </div> -->
                    <div class="short-desc-txt">
                        <p>
                            A subsidiary of FMN, Golden Penny produces
                            high-quality oils, margarine and spread for
                            delicious cooking, frying and an overall healthy
                            eating experience. Carefully processed and purified
                            from high-quality raw materials, golden penny oil
                            and spread is good for the heart. It also meets the
                            market demand for hygiene, nutrition, and other
                            health concerns.
                        </p>
                    </div>
                    <div class="col s12 pad0 pr-wrapper">
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/oil-spreads/Golden penny spread.png"
                                    alt="Golden Penny Spread"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Golden Penny Spread
                                </div>
                                <div class="product-desc">
                                    Golden Penny Spread is enriched with seven
                                    essential vitamins; Vitamin A, B6, B12, D,
                                    E, Folic Acid and Niacin to support healthy
                                    growth and development especially in
                                    children. Golden Penny Spread is available
                                    in 3 pack sizes which are 250g, 450g, and
                                    900g.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/oil-spreads/Pure vegetable oil.png"
                                    alt="Pure vegetable oil"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Pure Vegetable Oil
                                </div>
                                <div class="product-desc">
                                    Golden Penny pure vegetable oil is expertly
                                    purified to keep it safe and hygienic for
                                    use. This high-quality brand has no
                                    cholesterol, is trans-fat free and enriched
                                    with Vitamin A and iron to help address the
                                    nutritional deficiency in the Nigerian diet.
                                    It is available in four pack sizes; 1 litre;
                                    2.75 litres, 4litres and 25 litres.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/oil-spreads/Margarine.png"
                                    alt="Margarine"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Margarine
                                </div>
                                <div class="product-desc">
                                    Golden Penny Margarine is enriched with
                                    seven essential vitamins; Vitamins A, B6,
                                    B12, D, E, Folic Acid and Niacin to support
                                    healthy growth and development especially in
                                    children. Golden Penny Margarine is suitable
                                    for cooking, baking and making pastries.
                                </div>
                            </div>
                        </div>
                        <div class="pr-div">
                            <div class="product-img">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/oil-spreads/Pure soya oil.png"
                                    alt="Pure soya oil"
                                />
                            </div>
                            <div class="product-details">
                                <div class="product-title bold-txt">
                                    Pure Soya Oil
                                </div>
                                <div class="product-desc">
                                    Golden Penny pure Soya Oil is 100% pure and
                                    has no cholesterol. It is a natural source
                                    of the essential Omega 3 fatty acid. This
                                    food delight is affordable and available in
                                    1 litre, 2.75 litress, 4 litres and 25
                                    litres.
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

export default {
    name: 'OilAndSpreads',
    components: {
        PageBanner,
        BrandsPageSubNav,
    },
};
</script>

<style scoped>
@import url('../../assets/css/brands.css');
.product-details {
    border-bottom-color: #e0e452;
    min-height: 250px;
}

.pr-div {
    margin-bottom: 20px;
}

@media (max-width: 600px) {
    .product-details {
        min-height: 300px;
    }
}
</style>

<!--<style src="~/assets/css/brands.css"></style>-->
