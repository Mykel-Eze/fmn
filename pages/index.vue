<template>
    <div>
        <LandingSection :slides="home['0'].slides" />
        <!-- <LandingSection /> -->

        <section id="company-fractions">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0 cfr-div-wrapper">
                        <div
                            class="cfr-box"
                            v-for="(item, i) in home['1'].pillars"
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
                                <div class="cf-heading">
                                    <span>{{ item.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--=== Latest News Section ===-->
        <section id="latest-news" v-if="posts.length > 0">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0 news-wrapper">
                        <div class="col s12 news-caption">
                            <!-- <img src="https://flourmills.s3.eu-central-1.amazonaws.com/images/blog-icon.svg" alt="blog"/> -->
                            <span class="black-txt bold-txt">Latest news</span>
                        </div>
                        <div class="col s12 pad0">
                            <div
                                v-for="post in posts"
                                :key="post.id"
                                class="col s12 l6 news-div"
                            >
                                <div class="col s12 m5 l-news">
                                    <img
                                        :src="post.thumbnail.url"
                                        alt="news image"
                                        class="full-width l-news-img"
                                    />
                                </div>
                                <div class="col s12 m7">
                                    <h5 class="news-title">
                                        <nuxt-link
                                            :to="'/blog/' + post.slug"
                                            class="black-txt"
                                        >
                                            <b>{{ post.title }}</b>
                                        </nuxt-link>
                                    </h5>
                                    <p
                                        class="news-summary text-justify-xs"
                                        v-html="post.excerpt"
                                    ></p>
                                    <div class="news-date">
                                        <b>{{
                                            formatDate(post.published_on)
                                        }}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Latest News Section ===-->

        <!--=== Career Choices Section ===-->
        <section id="career-choices">
            <div
                class="row"
                :style="{ backgroundImage: 'url(' + home['2'].image.url + ')' }"
            >
                <div class="col s12 m6 pad0 career-txt-wrapper">
                    <div class="container">
                        <div class="col s12 m10 offset-m1">
                            <h5 class="">
                                <span class="bold-txt">
                                    {{ home['2'].title }}
                                </span>
                            </h5>
                            <p v-html="home['2'].description"></p>
                            <div class="cp-link-wrapper">
                                <nuxt-link :to="home['2'].link">
                                    <span>Our Career Portal</span>
                                    <!-- <i class="material-icons cpr-right">chevron_right</i> -->
                                    <!-- <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/career-right-icon.svg"
                                        alt="career-right-icon"
                                        class="btn-arrow"
                                    /> -->
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6 pad0 career-sec-img-wrapper">
                    <img :src="home['2'].image.url" alt="career" />
                </div>
            </div>
        </section>
        <!--=== end of Career Choices Section ===-->

        <!--=== Explore Brand Section ===-->
        <ExploreBrands :brands="brands" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExploreBrands from '@/components/ExploreBrands.vue';
import moment from 'moment';

export default Vue.extend({
    name: 'Home',
    layout: 'default',
    components: { ExploreBrands },
    async asyncData({ $axios }: any) {
        const res = await $axios.get('pages?title=Home');
        const brands = await $axios.get('brands');
        return { home: res.data[0].content, brands: brands.data };
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        async getPosts() {
            const res = await this.$axios.get(
                'posts?_limit=2&_sort=published_on:desc'
            );
            if (res.status === 200) {
                this.posts = res.data;
            }
        },
        formatDate(date: string): string {
            if (date) return moment(date).format('MMM DD YYYY');
            return date;
        },
    },
    created() {
        this.getPosts();
    },
});
</script>

<style scoped>
@import url('~/assets/css/home.css');

.home-links a {
    margin-right: 1rem;
}
.cpr-right {
    font-size: 20px;
    position: relative;
    top: 5.5px;
    font-weight: 100;
}
.l-news {
    height: 190px;
    overflow: hidden;
    position: relative;
  }
.l-news-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/* @media (min-width: 601px) {
    .l-news {
        height: 190px;
        overflow: hidden;
        position: relative;
    }
    .l-news-img {
        width: auto;
        height: 100%;
        min-width: 100%;
        position: absolute;
        left: -9999px;
        right: -9999px;
        margin: auto;
    }
} */
@media (min-width: 601px) and (max-width: 991px) {
    .l-news {
        height: 175px;
    }
}
@media (max-width: 600px) {
  .l-news {
      margin-bottom: 20px;
  }
}
</style>
