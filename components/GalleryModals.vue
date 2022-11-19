<template>
    <div>
        <!--=== Modal Structure ===-->
        <div id="video-modal" class="modal modal-video">
            <span class="close cursor modal-close">
                &times;
            </span>
            <div class="modal-content full-height">
                <div class="full-height">
                    <iframe
                        width="100%"
                        height="100%"
                        :src="videoLink + '?controls=0'"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
        <div id="photo-box-1" class="modal modal-photo">
            <span class="close cursor modal-close">
                &times;
            </span>
            <div class="modal-content full-height">
                <div class="full-height center">
                    <div class="slider">
                        <div class="album-title">{{ modalTitle }}</div>
                        <ul class="slides">
                            <li v-for="(pic, index) in picList" :key="index">
                                <img :src="pic.url" />
                            </li>
                        </ul>
                        <div
                            class="navSlider nextSlider"
                            @click="nextSlideFunc()"
                        >
                            &#10095;
                        </div>
                        <div
                            class="navSlider prevSlider"
                            @click="prevSlideFunc()"
                        >
                            &#10094;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--=== end of Modal Structure ===-->
    </div>
</template>

<script>
export default {
    name: 'GalleryModals',
    props: ['picList', 'modalTitle', 'videoLink'],
    mounted() {
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
        var ModalVideo = document.querySelectorAll('#video-modal');
        var ModalPhoto = document.querySelectorAll('.modal-photo');
        M.Modal.init(ModalVideo, {
            endingTop: '20%',
            onCloseStart: stopVideo,
        });
        M.Modal.init(ModalPhoto, {
            endingTop: '20%',
        });

        // var elemSlider = document.querySelectorAll('.slider');
        // M.Slider.init(elemSlider, {
        //     indicators: true,
        // });
    },
    methods: {
        nextSlideFunc() {
            var elemSlider = event.target.parentNode;
            M.Slider.getInstance(elemSlider).next();
        },
        prevSlideFunc(e) {
            var elemSlider = event.target.parentNode;
            M.Slider.getInstance(elemSlider).prev();
        },
    },
    updated(){
      window.M = require('materialize-css');
      var elemSlider = document.querySelectorAll('.slider');
      M.Slider.init(elemSlider, {
          indicators: true,
      });
    }
};
</script>

<style>
@import url('~assets/css/gallery.css');

.slider .slides {
    height: 100% !important;
}
.slider ul.indicators {
    z-index: 10;
    text-align: right;
    bottom: 6px;
}
.slider .indicators .indicator-item {
    height: 10px;
    width: 10px;
    margin: 0 5px;
}
.slider .indicators .indicator-item.active {
    background-color: var(--pry-color);
}
.album-title {
    position: absolute;
    z-index: 10;
    color: white;
    background: black;
    bottom: 0;
    padding: 8px 16px;
    font-weight: bold;
    text-align: left;
    width: 100%;
}
div#photo-box {
    background: black;
}
</style>

<style scoped>
@import url('../assets/css/gallery.css');
</style>
