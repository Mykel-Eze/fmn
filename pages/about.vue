<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="about['0'].heading"
            pageCrumbName="About Us"
            class="aboutUs-page"
            :bgImage="about['0'].bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Sub Navigation Section ===-->
        <AboutPageSubNav class="aboutUs-page" />
        <!--=== end of Sub Navigation Section ===-->

        <!--=== Text Wrapper Section ===-->
        <section id="texts-wrapper">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0-xs">
                        <p class="text-justify" v-html="about['1'].content">
                        </p>
                        <div class="gray-bg special-desc">
                            <p v-html="about['2'].content">
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-top: 40px;">
                <div class="container">
                    <h5 class="gray-txt">{{about['3'].title}}</h5>
                    <p class="mag-top-0" v-html="about['3'].content"></p>

                    <div>
                        <div class="col s12 pad0 cfr-div-wrapper">
                            <div
                                class="cfr-box"
                                v-for="(item, i) in about['4'].pillars"
                                :key="i"
                            >
                                <div class="cf-wrapper">
                                    <div class="cf-img-wrapper">
                                        <nuxt-link
                                            :to="item.link"
                                            class="cf-imnuxt-link"
                                        >
                                            <img
                                                :src="item.image.url"
                                                alt="food-division"
                                                class="full-width"
                                            />
                                        </nuxt-link>
                                    </div>
                                    <div class="cf-heading cfh1">
                                        <span>{{ item.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Text Wrapper Section ===-->

        <!--=== Explore Brand Section ===-->
        <!-- <ExploreBrands /> -->
        <!--=== end of Explore Brand Section ===-->
    </div>
</template>

<script>
import Vue from 'vue';
import PageBanner from '~/components/PageBanner.vue';
// import ExploreBrands from "~/components/ExploreBrands";
import AboutPageSubNav from '~/components/AboutPageSubNav';

export default Vue.extend({
    name: 'AboutUs',
    components: {
        PageBanner,
        AboutPageSubNav,
    },
    data() {
        return {};
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('pages?title=About');
        return { about: res.data[0].content };
    },
});
</script>

<style scoped>
@import url('~assets/css/home.css');
.gray-bg.special-desc {
    background-color: #f4f4f5;
    padding: 15px 40px;
    text-align: justify;
    font-size: 14px;
    line-height: 1.4;
}

.gray-bg.special-desc p {
    margin: 8px auto;
}

.gray-txt {
    margin-bottom: 5px;
    color: #6c707a;
}

.theme-dark .gray-txt {
    color: #ffffff;
}

.cfr-box:nth-child(1) .cfh1 {
    background-color: #b0d865;
}

.cfr-box:nth-child(2) .cfh1 {
    background-color: #83c38e;
}

.cfr-box:nth-child(3) .cfh1 {
    background-color: #65b3b5;
}

.cfr-box:nth-child(4) .cfh1 {
    background-color: #54a9d2;
}

@media (max-width: 600px) {
    .gray-bg.special-desc {
        padding: 15px 25px;
    }
}
</style>
