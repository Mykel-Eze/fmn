<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="gallery.heading"
            pageCrumbName="Gallery"
            class="gallery-page"
            :bgImage="gallery.bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <p>
                        Exciting bits and clips of who we are and what we do.
                        Our Gallery keeps an expanding collection of videos and
                        pictures for your education, information, and
                        entertainment
                    </p>
                    <p>
                        Our expanding collection of pictures and videos that
                        tell the story of who we are and what we do.
                    </p>
                </div>
            </div>
        </section>

        <!-- <section id="tags-nav">
            <div class="row">
                <div class="container">
                    <div class="tag-nav col s12 pad0">
                        <span class="brt-txt">Browse by categories: </span>
                        <button class="gray-btn">Show All</button>
                        <button class="yellow-btn">FMN Pasta</button>
                        <button class="blue-btn">FMN Agro</button>
                        <button class="green-btn">
                            2017 Food West Africa EXPO
                        </button>
                        <button class="yellow-btn">AGM</button>
                    </div>
                </div>
            </div>
        </section> -->

        <section id="photo-div">
            <div class="row">
                <div class="container">
                    <div class="title-bar green-bg col s12">
                        <h5>Photos</h5>
                    </div>
                    <div class="col s12 pad0 gallery-wrapper">
                        <div
                            v-for="item in pictures"
                            :key="item.id"
                            class="gallery-item rel"
                        >
                            <div @click="setSelected(item)">
                                <!-- <div @click="setSelected(item)" class="modal-trigger" data-target="photo-box-1"> -->
                                <img
                                    :src="item.thumbnail.url"
                                    alt="photo"
                                    class="full-width gallery-img"
                                />
                            </div>
                            <div class="num-of-photos">
                                1/{{ item.file.length }}
                            </div>
                            <div class="gallery-item-title">
                                <span>{{ item.event }}</span>
                            </div>
                        </div>
                        <!-- <div class="gallery-item rel">
                            <div class="modal-trigger" data-target="photo-box-2">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/gallery/2017 Food West Africa EXPO/1.jpg"
                                    alt="photo"
                                    class="full-width gallery-img"
                                />
                            </div>
                            <div class="num-of-photos">1/8</div>
                            <div class="gallery-item-title">
                                <span>2017 Food West Africa EXPO </span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>

        <section id="video-div">
            <div class="row">
                <div class="container">
                    <div class="title-bar blue-bg col s12">
                        <h5>Videos</h5>
                    </div>
                    <div class="col s12 pad0 gallery-wrapper">
                        <div
                            v-for="item in videos"
                            :key="item.id"
                            class="gallery-item rel"
                        >
                            <div @click="selectedVideo(item)">
                                <img
                                    :src="item.thumbnail.url"
                                    alt="video"
                                    class="full-width gallery-img"
                                />
                            </div>
                            <div class="gallery-item-title">
                                <span>
                                    {{ item.event }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <GalleryModals
            :picList="picList"
            :modalTitle="modalTitle"
            :videoLink="videoLink"
        ></GalleryModals>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import GalleryModals from '~/components/GalleryModals.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'Gallery',
    components: {
        PageBanner,
        GalleryModals,
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('galleries?file_type=picture');
        const vids = await $axios.get('galleries?file_type=video');
        const gallery = await $axios.get('pages?title=Gallery');
        return {
            pictures: res.data,
            videos: vids.data,
            gallery: gallery.data[0].content[0],
        };
    },
    data: () => ({
        picList: [],
        modalTitle: '',
        videoLink: '',
    }),
    methods: {
        setSelected(item) {
            this.picList = [];
            this.picList = item.file;
            this.modalTitle = item.event;
            const elem = document.getElementById('photo-box-1');
            const instance = M.Modal.getInstance(elem);
            instance.open();
        },
        selectedVideo(item) {
            this.videoLink = item.link;
            const elem = document.getElementById('video-modal');
            const instance = M.Modal.getInstance(elem);
            instance.open();
        },
    },
    mounted() {
        window.M = require('materialize-css');
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

div#photo-box {
    background: black;
}

@media (max-width: 600px) {
    .tag-nav > span.brt-txt {
        display: block;
        margin-bottom: 5px;
    }
}
</style>

<style scoped>
@import url('~assets/css/gallery.css');
</style>
