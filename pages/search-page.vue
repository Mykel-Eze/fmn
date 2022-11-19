<template>
    <div>
        <div>
            <!--=== Page Banner Section ===-->
            <PageBanner
                pageTitle="Search Result"
                pageCrumbName=""
                class="search-page"
            />
            <!--=== end of Page Banner Section ===-->

            <section id="body-div">
                <div class="row">
                    <div class="container">
                        <div class="col s12 m10 l8 pad0">
                            <form @submit.prevent="onSearch" class="rel">
                                <input
                                    type="search"
                                    name="search"
                                    id="search-all"
                                    v-model="inputQuery"
                                />
                                <button type="submit" id="si2">
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/search-icon.svg"
                                        alt="search"
                                    />
                                </button>
                            </form>
                        </div>

                        <div
                            v-if="!searching && noResult()"
                            id="no-Result"
                            class="col s12 m10 l8"
                        >
                            <h4 class="center">
                                <i class="material-icons large"
                                    >error_outline</i
                                >
                                <br />
                                <span>
                                    Your search for "<span
                                        class="pry-color bold-txt"
                                        >{{ routeQuery }}</span
                                    >" didn't return any results.
                                </span>
                            </h4>
                        </div>

                        <SearchItem
                            v-for="item in post"
                            :key="item.slug"
                            :title="item.title"
                            :slug="item.slug"
                            :content="item.excerpt"
                            :url="'/blog/' + item.slug"
                        />

                        <SearchItem
                            v-for="item in teamMember"
                            :key="item.name + item.type"
                            :title="item.name"
                            :slug="item.type"
                            :content="item.position"
                            :url="
                                item.type === 'Management'
                                    ? '/management-team'
                                    : '/board'
                            "
                        />

                        <SearchItem
                            v-for="item in pressRelease"
                            :key="item.id + item.title"
                            :title="item.title"
                            :slug="item.slug"
                            content=""
                            :url="'/press-release/' + item.slug"
                        />

                        <SearchItem
                            v-for="item in product"
                            :key="item.objectID"
                            :title="item.name"
                            :slug="item.slug"
                            :content="item.brand"
                            :url="'/' + item.slug"
                        />

                        <SearchItem
                            v-for="item in gallery"
                            :key="item.objectID"
                            :title="item.event"
                            :slug="item.category"
                            :content="item.file_type"
                            :url="'/gallery'"
                        />

                        <SearchItem
                            v-for="item in career"
                            :key="item.objectID"
                            :title="item.title"
                            :slug="item.slug"
                            content=""
                            :url="'/careers'"
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import SearchItem from '~/components/SearchItem.vue';

import algoliasearch from 'algoliasearch';
import { queries } from '../services/search-queries';

export default {
    name: 'SearchPage',
    components: {
        PageBanner,
        SearchItem,
    },
    data() {
        return {
            post: [],
            teamMember: [],
            pressRelease: [],
            page: [],
            gallery: [],
            product: [],
            subsidiaries: [],
            career: [],
            inputQuery: '',
            routeQuery: '',
            searching: false,
        };
    },
    watch: {
        '$route.query.query': function (query) {
            this.searchMethod(query);
        },
    },
    methods: {
        noResult() {
            if (
                this.post.length < 1 &&
                this.pressRelease.length < 1 &&
                this.teamMember.length < 1 &&
                this.product.length < 1 &&
                this.gallery.length < 1 &&
                this.subsidiaries.length < 1 &&
                this.career.length < 1
            ) {
                return true;
            }
            return false;
        },
        onSearch() {
            this.$router.push('/search-page?query=' + this.inputQuery);
        },
        searchMethod(query) {
            this.routeQuery = query;
            this.searching = true;
            const client = algoliasearch(
                'ZF6BC669UB',
                '47dc07b3f73cdd7da4990ab4be35790d'
            );
            client
                .search(queries(query))
                .then((val) => {
                    for (let item of val.results) {
                        if (item.index === 'post') this.post = item.hits;
                        if (item.index === 'team-member')
                            this.teamMember = item.hits;
                        if (item.index === 'page') this.page = item.hits;
                        if (item.index === 'press-release')
                            this.pressRelease = item.hits;
                        if (item.index === 'gallery') this.gallery = item.hits;
                        if (item.index === 'product') this.product = item.hits;
                        if (item.index === 'subsidiaries')
                            this.subsidiaries = item.hits;
                        if (item.index === 'career') this.career = item.hits;
                    }
                    this.searching = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.searching = false;
                });
        },
    },
    mounted() {
        this.searchMethod(this.$route.query.query);
    },
};
</script>

<style scoped>
/* @import url("../assets/css/internal-style.css"); */
@import url('../assets/css/search-page.css');

body {
    color: rgba(0, 0, 0, 0.7);
}

.theme-dark body {
    color: rgba(241, 241, 241, 0.8);
}

/* section#sec-home {
        background-image: url("https://flourmills.s3.eu-central-1.amazonaws.com/images/other-bg/About us.jpg");
        margin-bottom: 0;
    } */

.theme-dark a {
    color: rgba(241, 241, 241, 0.8);
}

.theme-dark footer a {
    color: var(--pry-color);
}
</style>
