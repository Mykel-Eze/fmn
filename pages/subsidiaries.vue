<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Subsidiaries"
            class="subsidiaries-page"
            pageCrumbName="Subsidiaries"
            :bgImage="about.bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Sub Navigation Section ===-->
        <AboutPageSubNav class="subsidiaries-page" />
        <!--=== end of Sub Navigation Section ===-->

        <!--=== SubsidiariesSection ===-->
        <section id="subsidiaries">
            <div class="row">
                <div class="container">
                    <div class="col s12 subs-img-wrapper">
                        <div
                            v-for="item in subs"
                            :key="item.id"
                            class="subs-img"
                        >
                            <a rel="noopener" :href="item.link" target="_blank" :style="{ backgroundImage: 'url(' + item.logo.url + ')' }">
                                <!-- <img
                                    :src="item.logo.url"
                                    :alt="item.id"
                                    class="brand-img abtl-img"
                                /> -->
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of SubsidiariesSection ===-->
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import AboutPageSubNav from '~/components/AboutPageSubNav';
import Vue from 'vue';

export default Vue.extend({
    name: 'Subsidiaries',
    components: { PageBanner, AboutPageSubNav },
    async asyncData({ $axios }) {
        const page = await $axios.get('pages?title=Subsidiaries');
        const subsidiaries = await $axios.get('subsidiaries');
        const res = await $axios.get('pages?title=About')
        return { page: page.data[0].content, subs: subsidiaries.data, about: res.data[0].content[0] };
    },
});
</script>

<style scoped>
section#subsidiaries {
    padding-bottom: 30px;
    padding-top: 10px;
}
.subs-img-wrapper {
    display: grid;
    grid-template-columns: calc(25% - 20px) calc(25% - 20px) calc(25% - 20px) calc(25% - 20px);
    grid-gap: 30px 20px;
    text-align: center;
    /* grid-template-columns: 25% 25% 25% 25%; */
}
.subs-img {
    background: white;
    box-shadow: 0px 0px 8px lightgrey;
    border-radius: 6px;
    padding: 10px;
    height: 122px;
}
section#subsidiaries a {
    display: block;
    text-align: center;
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
/* section#subsidiaries a img {
    width: 90%;
    max-height: 122px;
} */


@media (max-width: 992px) {
    section#subsidiaries a img.agri-palm-img {
        width: 60%;
        position: relative;
        top: 45px;
    }
}
@media (max-width: 600px) {
    section#subsidiaries a img {
        width: 100%;
        max-height: 43px;
    }
    .subs-img {
      height: 55px;
    }
    .subs-img-wrapper {
        grid-gap: 30px 10px;
        grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
    }
}
</style>
