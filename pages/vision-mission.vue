<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="about.heading"
            class="visionmission-page"
            pageCrumbName="Vision and Mission"
            :bgImage="about.bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Sub Navigation Section ===-->
        <AboutPageSubNav class="visionmission-page" />
        <!--=== end of Sub Navigation Section ===-->

        <!--=== Video Banner Section ===-->
        <section id="vid-and-desc">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div id="hh-video-img">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/founder-video-bg2.jpg"
                                alt="About FMN"
                                class="full-width cursor"
                                @click="showTheVideo()"
                            />
                        </div>
                        <div id="hh-video" style="display: none">
                            <iframe
                                width="100%"
                                height="500px"
                                src="https://www.youtube.com/embed/oXa-wG-_NQ4?controls=0&amp;rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Video Banner Section ===-->

        <!--=== More Text Section ===-->
        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div class="col s12 l7 mts-1">
                            <div class="mts-heading">
                                <h5>Meet the Founder</h5>
                            </div>
                            <div class="mts-paragraphs text-justify">
                                <p>
                                    Mr. George Coumantaros who was educated at
                                    Athens University, Greece moved to the
                                    United States in 1946 to embark on what has
                                    become a 64 years international business
                                    career.
                                </p>
                                <p>
                                    He was primarily responsible for the
                                    establishment of Flour Mills of Nigeria Plc.
                                    on 29th September 1960 and currently serves
                                    on the Board of many reputable companies and
                                    organizations in Nigeria and overseas.
                                </p>
                                <p>
                                    A highly accomplished man with wide
                                    experience in the USA and Europe, Mr.
                                    Coumantaros had been a Director of Flour
                                    Mills of Nigeria Plc. since its inception.
                                    He became Chairman on 26th September 1978 on
                                    the retirement from the Board of his father
                                    Mr. John S. Coumantaros.
                                </p>
                                <p>
                                    Mr. George Coumantaros is a man of
                                    integrity, who has piloted the Group’s
                                    affairs to its present status through his
                                    vision, passion and hard work.
                                </p>
                                <p>
                                    He retired as the Chairman of the Company
                                    and was elevated to the position of Chairman
                                    Emeritus after the 54th Annual General
                                    Meeting held on 10th September, 2014.
                                </p>
                            </div>
                        </div>
                        <div class="col s12 l5 mts-2">
                            <div class="col s12 mts-item flex-div">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/vision-icon.svg"
                                    alt="vision"
                                    class="mts-icons"
                                />
                                <div>
                                    <h5>Our Vision</h5>
                                    <p>
                                        To be the leading food and agro-allied
                                        group in Africa.
                                    </p>
                                </div>
                            </div>
                            <div class="col s12 mts-item flex-div">
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/mission-icon.svg"
                                    alt="mission"
                                    class="mts-icons"
                                />
                                <div>
                                    <h5>Our Mission</h5>
                                    <p>
                                        To produce and supply products of
                                        superior quality and value to the
                                        market, thereby, enriching the lives of
                                        consumers, customers, communities,
                                        employees and all stakeholders.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col s12 mts-item last-mts-item flex-div"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/goals-icon.svg"
                                    alt="goals"
                                    class="mts-icons"
                                />
                                <div>
                                    <h5>Our Goals</h5>
                                    <ul>
                                        <li>
                                            To be a customer-centric company,
                                        </li>
                                        <li>
                                            To be focused on both product and
                                            process innovation,
                                        </li>
                                        <li>
                                            To always seek to build value for
                                            all stakeholders.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of More Text Section ===-->

        <!--=== Modal Structure ===-->
        <div id="video-modal" class="modal">
            <span class="close cursor modal-close"> &times; </span>
            <div class="modal-content full-height">
                <div class="full-height">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/e0iHxt2WgFk?controls=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
        <!--=== end of Modal Structure ===-->
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import AboutPageSubNav from '~/components/AboutPageSubNav';
import Vue from 'vue';

export default Vue.extend({
    name: 'VisionMission',
    components: {
        PageBanner,
        AboutPageSubNav,
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('pages?title=About');
        return { about: res.data[0].content[0] };
    },
    data() {
        return {};
    },
    mounted() {
        // var t_modal = document.querySelector("#video-modal");
        window.M = require('materialize-css');
        var stopVideo = function (modal) {
            var currentIframe = modal.querySelector(
                '.modal-content > div > iframe'
            );
            var currentIframe2 = modal.querySelector(
                '.modal-content > div > iframe'
            );
            currentIframe.src = currentIframe2.src;
        };
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {
            endingTop: '20%',
            onCloseStart: stopVideo,
        });
    },
    methods: {
        showTheVideo() {
            var videoImg = document.querySelector('#hh-video-img');
            var theImgHeight = document.querySelector(
                '#hh-video-img > img'
            ).height;
            var videoWrapper = document.querySelector('#hh-video');
            var theVideo = document.querySelector('#hh-video > iframe');
            videoImg.style.display = 'none';
            videoWrapper.style.display = 'block';
            theVideo.src += '&amp;autoplay=1';
            theVideo.height = theImgHeight;
        },
    },
});
</script>

<style scoped>
section.more-txt-sec {
    margin-bottom: 40px;
}

.mts-2 {
    margin-top: 15px;
}

.mts-heading h5 {
    background-color: #65b3b5;
    color: white;
    padding: 25px 20px;
    margin-bottom: 0;
}

.mts-paragraphs {
    font-size: 14px;
    padding: 20px 25px 25px;
    background-color: #f4f4f5;
    color: #6c707a;
}

img.mts-icons {
    position: relative;
    height: 50px;
    top: 15px;
    margin-right: 15px;
}

.mts-item {
    background: #f4f4f5;
    color: #6c707a;
    line-height: 1.4;
    font-size: 14px;
    padding: 10px 25px !important;
}

.mts-item.last-mts-item {
    background: #6c707a;
    color: white;
    padding: 10px 25px 20px !important;
}

.col.s12.m5.mts-2 {
    margin-top: 15px;
}
</style>
