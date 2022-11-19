<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="blog.heading"
            pageCrumbName="Blog"
            class="blog-page"
            :bgImage="blog.bg_image.url"
            :shareUrl="pageUrl"
            shareTitle="FMN Blog"
            shareContent=""
        />
        <!--=== end of Page Banner Section ===-->

        <section id="tags-nav">
            <div class="row">
                <div class="container">
                    <div class="tag-nav col s12">
                        <span class="brt-txt">Browse by categories: </span>
                        <button
                            v-for="item in categories"
                            :key="item.slug"
                            :class="
                                useFilter === item.name
                                    ? 'green-btn'
                                    : 'gray-btn'
                            "
                            @click="filterPost(item)"
                        >
                            {{ item.name }}
                        </button>
                        <!-- <button class="yellow-btn">AGM</button>
                        <button class="blue-btn">CSR</button>
                        <button class="green-btn">Sustainability</button> -->
                    </div>
                </div>
            </div>
        </section>

        <section id="body-div">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div v-if="!useFilter">
                            <div
                                v-for="item in posts"
                                :key="item.id"
                                :class="
                                    'col s12 m6 l3 ' +
                                    (item.category
                                        ? useFilter.toLowerCase() ||
                                          item.post_category.name.toLowerCase()
                                        : '') +
                                    ' posts'
                                "
                            >
                                <div>
                                    <div class="blog--img rel">
                                        <nuxt-link :to="'/blog/' + item.slug">
                                            <img
                                                :src="item.thumbnail.url"
                                                alt="pinned-post"
                                                class="full-width"
                                            />
                                        </nuxt-link>
                                    </div>
                                    <div class="blog--details rel">
                                        <h5 class="blog-title bold-txt">
                                            {{ item.title }}
                                        </h5>
                                        <!-- <div class="like-comments">
                                        <span><b>0</b> Likes</span>
                                        <span><b>0</b> Comments</span>
                                    </div> -->
                                        <div class="blog--dt flex-div">
                                            <div class="blog-date">
                                                {{
                                                    formatDate(
                                                        item.published_on
                                                    )
                                                }}
                                            </div>
                                            <div class="tag">
                                                {{
                                                    useFilter ||
                                                    item.post_category.name
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            v-for="item in morePosts"
                            :key="item.id"
                            :class="
                                'col s12 m6 l3 ' +
                                (item.category
                                    ? useFilter.toLowerCase() ||
                                      item.post_category.name.toLowerCase()
                                    : '') +
                                ' posts'
                            "
                        >
                            <div>
                                <div class="blog--img rel">
                                    <nuxt-link :to="'/blog/' + item.slug">
                                        <img
                                            :src="item.thumbnail.url"
                                            alt="pinned-post"
                                            class="full-width"
                                        />
                                    </nuxt-link>
                                </div>
                                <div class="blog--details rel">
                                    <h5 class="blog-title bold-txt">
                                        {{ item.title }}
                                    </h5>
                                    <!-- <div class="like-comments">
                                        <span><b>0</b> Likes</span>
                                        <span><b>0</b> Comments</span>
                                    </div> -->
                                    <div class="blog--dt flex-div">
                                        <div class="blog-date">
                                            {{ formatDate(item.published_on) }}
                                        </div>
                                        <div class="tag">
                                            {{
                                                useFilter ||
                                                item.post_category.name
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="col s12 pad0 center"
                            v-if="!useFilter && showMoreBtn"
                        >
                            <button
                                @click="getMore()"
                                class="view-more-btn"
                                id="read-more"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/d-arrow.svg"
                                    alt="down-arrow"
                                    class="arw-1"
                                />
                                <span>View More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
    name: 'Blog',
    components: {
        PageBanner,
    },
    data() {
        return {
            morePosts: [],
            page: 0,
            categories: [],
            useFilter: '',
            pageUrl: '',
            showMoreBtn: true,
        };
    },
    async asyncData({ $axios }) {
        const res = await $axios.get(
            'posts?_limit=4&_start=0&_sort=published_on:DESC'
        );
        const blog = await $axios.get('pages?title=Blog');
        return { posts: res.data, blog: blog.data[0].content[0] };
    },
    methods: {
        formatDate(dt) {
            return moment(dt).format('DD MMMM YY');
        },
        async getMore() {
            this.page += 4;
            const res = await this.$axios.get(
                `posts?_limit=4&_start=${this.page}&_sort=published_on:DESC`
            );
            if (res.status === 200) {
                this.morePosts = [...this.morePosts, ...res.data];
                if (res.data.length <= 0) {
                    this.page -= 4;
                    this.showMoreBtn = false;
                }
            }
        },
        async getCategories() {
            const res = await this.$axios.get('post-categories');
            if (res.status === 200) {
                this.categories = res.data;
            }
        },
        async filterPost(item) {
            this.page = 0;
            this.useFilter = item.name;
            this.morePosts = item.posts;
        },
    },
    created() {
        this.getCategories();
    },
    mounted() {
        this.pageUrl = window.location.href;
        window.$ = require('jquery');

        $('#read-more').click(function () {
            var elem = $('#read-more span').text();
            if (elem == 'View More') {
                //Stuff to do when btn is in the read more state
                // $('#read-more span').text('View Less');
                $('.hide-more').slideDown();
                $(this).addClass('turn-img');
            } else {
                //Stuff to do when btn is in the read less state
                $('#read-more span').text('View More');
                $('.hide-more').slideUp();
                $(this).removeClass('turn-img');
            }
        });
    },
});
</script>

<style scoped>
.tag-nav button {
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 2px 3px;
    cursor: pointer;
}

.gray-btn {
    background-color: #6c707a;
}

.yellow-btn {
    background-color: #f8dc58;
}

.blue-btn {
    background-color: #65b3b5;
}

.green-btn {
    background-color: #80c442;
}

@media (max-width: 600px) {
    .tag-nav > span.brt-txt {
        display: block;
        margin-bottom: 5px;
    }
}
</style>
<style scoped>
.bold-txt {
    font-family: var(--font);
    font-weight: 600;
}

.like-comments {
    position: absolute;
    bottom: 32px;
}

.posts {
    margin-bottom: 30px;
}

.general.posts > div,
.posts > div {
    background-color: #60646c;
    color: white;
}

.agm.posts > div {
    background-color: #f8dc58;
    color: white;
}

.like-comments span:first-child {
    padding-right: 7px;
}

.like-comments span {
    word-spacing: -1px;
}

.press.posts > div {
    background-color: #80c442;
    color: white;
}

.csr.posts > div {
    background-color: #65b3b5;
    color: white;
}

.tag-nav {
    margin-bottom: 10px;
}

h5.blog-title {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 100%;
    height: 35px;
    /* Fallback for non-webkit */
    margin: 0 auto;
    line-height: 1;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
}

.blog--details {
    padding: 10px 20px 30px;
    height: 128px;
}

.blog-date {
    flex-grow: 1;
}

.blog--dt.flex-div {
    font-size: 13px;
    position: absolute;
    width: 100%;
    left: 0;
    padding: 0 20px;
    bottom: 10px;
}

.posts {
    margin-bottom: 20px;
}

.hide-more {
    display: none;
}

.view-more-btn {
    width: 200px;
    height: 55px;
}
button#read-more {
    background-color: rgba(96, 100, 108, 0.7);
}

.blog--img {
    width: 100%;
    height: 232px;
    overflow: hidden;
    position: relative;
}
.blog--img img.full-width {
    width: auto;
    height: 100%;
    min-width: 100%;
    position: absolute;
    left: -9999px;
    right: -9999px;
    margin: auto;
}
@media (max-width: 600px) {
    .blog--img img.full-width {
        height: auto;
        min-height: 100%;
        /* position: relative; */
        top: -20px;
        width: 100%;
    }
}

@media (max-width: 600px) {
    h5.blog-title {
        font-size: 19px;
    }

    .blog--details {
        height: 120px !important;
    }

    .posts {
        padding: 0 !important;
    }
}
</style>
