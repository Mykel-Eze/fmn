<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="press.heading"
            :pageCrumbName="post.title.toLowerCase()"
            class="pressRelease-page"
            :bgImage="press.bg_image.url"
            :shareUrl="pageUrl"
            :shareTitle="post.title"
            :shareContent="post.content"
        />
        <!--=== end of Page Banner Section ===-->

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <div class="post-header">
                            <div class="right-align back-link">
                                <nuxt-link to="/press-release" class="blue-txt">
                                    &lt; Back to press
                                </nuxt-link>
                            </div>
                            <!--=== Note: Download icon is called twice (Desktop and Mobile) ===-->
                            <div class="flex-div">
                                <div class="post-date">
                                    <b class="blue-txt">{{
                                        formatDate(post.date)
                                    }}</b>
                                </div>
                                <div class="post-title">
                                    {{ post.title }}
                                </div>
                                <div class="download-post hidden-xs">
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
                    <div class="col s12 pad0-xs">
                        <div class="col s12 pad0 post-img-wrapper">
                            <img
                                v-if="post.picture"
                                :src="post.picture.url"
                                :alt="post.title"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 pad0" style="margin-bottom: 20px">
                            <p class="text-justify" v-html="post.content"></p>
                        </div>

                        <div class="col s12 right-align">
                            <a
                                rel="noopener"
                                :href="post.doc_link"
                                target="_blank"
                                class="download4mobile download-post-link"
                                download="dummy"
                            >
                                <i class="material-icons">file_download</i>

                                <span>Dowload Press Release</span>
                            </a>
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
    name: 'PressOne',
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
    created() {
        console.log(this.post);
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
    /* margin-left: 8px; */
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

.back-link {
    margin-bottom: 20px;
}
.post-img-wrapper {
    text-align: center;
}
.post-img-wrapper img.full-width {
    max-height: 650px;
    max-width: 100%;
    width: auto;
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

@media (max-width: 600px) {
    .post-header .flex-div {
        display: block;
    }

    .back-link {
        margin-bottom: 10px;
        margin-top: -10px;
    }

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
}
</style>
