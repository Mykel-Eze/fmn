<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="press.heading"
            :pageCrumbName="post.title.toLowerCase()"
            class="pressRelease-page"
        />

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <div class="post-header">
                            <div class="flex-div">
                                <div class="post-date">
                                    <b class="blue-txt">{{
                                        formatDate(post.date)
                                    }}</b>
                                </div>
                                <div class="right-align back-link">
                                    <nuxt-link to="/blog" class="blue-txt">
                                        &lt; Back to blog
                                    </nuxt-link>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0-xs post-wrapper-div">
                        <!--=== Note: Post-title is called twice  ===-->
                        <div class="col s12 pad0 post-img-wrapper">
                            <h4 class="post-title smbold-txt visible-xs">
                                {{ post.title }}
                            </h4>
                            <img
                                v-if="post.thumbnail"
                                :src="post.thumbnail.url"
                                :alt="post.title"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 pad0 post-txt-wrapper">
                            <h4 class="post-title smbold-txt hidden-xs">
                                {{ post.title }}
                            </h4>
                            <p class="text-justify" v-html="post.content"></p>
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
import moment from 'moment';

export default Vue.extend({
    name: 'BlogTwo',
    components: {
        PageBanner,
    },
    props: {
        press: Object,
        post: Object,
    },
    data() {
        return { pageUrl: '' };
    },
    methods: {
        formatDate(dt) {
            return moment(dt).format('DD MMM YYYY');
        },
    },
    mounted() {
        this.pageUrl = window.location.href;

        window.M = require('materialize-css');
        var elemsTooltip = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elemsTooltip);

        console.log(this.post);
    },
});
</script>

<style>
.material-tooltip {
    font-size: 0.8rem;
    padding: 8px;
    min-height: 30px;
}
</style>

<style scoped>
.blue-txt {
    color: #54a9d2;
}

a.blue-txt:hover {
    text-decoration: underline;
}

.post-date {
    padding: 0 10px 0 0;
    font-weight: 100;
}

.post-header {
    font-family: var(--font);
    font-size: 15px;
}

.post-header hr {
    border: none;
    height: 1px;
    background-color: white;
    opacity: 0.2;
}

.post-title {
    font-weight: bold;
    flex-grow: 1;
}

a.download-post-link {
    background: var(--pry-color);
    color: white;
    /* border-radius: 50%; */
    padding: 15px;
    font-size: 16px;
    font-weight: 800;
    margin: 10px;
    display: inline-block;
}
.theme-dark a.download-post-link {
    background: var(--sec-color);
    color: black;
}
a.download-post-link i {
    color: var(--pry-color);
    background: white;
    border-radius: 50%;
    padding: 5px;
    font-size: 16px;
    margin-right: 5px;
    position: relative;
    top: 2px;
}
.theme-dark a.download-post-link i {
    color: var(--sec-color);
    background: black;
}

.theme-light .post-header hr {
    background-color: black;
}
.post-wrapper-div {
    display: grid;
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    grid-gap: 20px;
}
.post-img-wrapper {
    text-align: center;
}
.post-img-wrapper img.full-width {
    max-height: 650px;
    max-width: 100%;
    width: auto;
}
.post-header .flex-div > div {
    width: 50%;
    margin-top: 20px;
}
@media (min-width: 993px) {
    .download-post-link i {
        margin-top: -5px;
    }
}
@media (max-width: 992px) {
    .post-header hr {
        margin-left: 0;
    }
}
@media (min-width: 601px) {
    .post-title {
        margin-top: 0;
    }
    .download4mobile-wrapper {
        grid-column: 1 / span 2;
    }
}

@media (max-width: 600px) {
    /* .post-header .flex-div {
        display: block;
    } */

    /* .back-link {
        margin-bottom: 10px;
        margin-top: -10px;
    } */

    #sharePage .col.s12 {
        padding: 0;
    }
    .post-date {
        display: flex;
    }
    .post-date > .blue-txt {
        flex-grow: 1;
    }
    .download-post-link i {
        margin-top: -3px;
        margin-bottom: 5px;
    }

    .post-wrapper-div {
        grid-template-columns: 100%;
    }
    .post-txt-wrapper {
        margin-bottom: 20px;
    }
    h4.post-title {
        margin: 0 0 20px;
    }
}
</style>
