<template>
    <!-- The "visibles-xs" class hides the componet but displays it in mobile devices only -->
    <div class="carousel carousel-slider center full-height visible-xs*">
        <div
            v-for="(item, index) in slides"
            :key="index"
            class="carousel-item"
            :id="'home-slide-' + (index + 1)"
            href="#one!"
            :style="{ backgroundImage: 'url(' + item.image.url + ')' }"
        >
            <div class="carousel-fixed-item flex-div">
                <div class="rotate-txt-right">Food and Agro Allied Group</div>
                <hr class="rotate-hr-right" />
                <div class="home-social-links">
                    <a
                        href="https:/instagram.com/thefmngroup"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/instagram-white.svg"
                            alt="instagram"
                            class="soc-logo-1"
                        />
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/instagram-c.svg"
                            alt="instagram"
                            class="soc-logo-2"
                        />
                    </a>
                    <a
                        href="https:/facebook.com/FMNGroup"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/facebook-white.svg"
                            alt="facebook"
                            class="soc-logo-1"
                        />
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/facebook-c.svg"
                            alt="facebook"
                            class="soc-logo-2"
                        />
                    </a>
                    <a
                        href="https:/twitter.com/thefmngroup"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/twitter-white.svg"
                            alt="twitter"
                            class="soc-logo-1"
                        />
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/twitter-c.svg"
                            alt="twitter"
                            class="soc-logo-2"
                        />
                    </a>
                    <a
                        href="https:/linkedin.com/company/the-fmn-group"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/linkedin-white.svg"
                            alt="linkedin"
                            class="soc-logo-1"
                        />
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/linkedin-c.svg"
                            alt="linkedin"
                            class="soc-logo-2"
                        />
                    </a>
                </div>
            </div>
            <div class="container rel full-height">
                <div class="main-txt-container left-align col s12 m8 l6 jj-lo">
                    <div>
                        <span class="main-subtxt">{{ item.subtitle }}</span>
                        <hr class="main-txt-line" />
                    </div>
                    <h3 class="bold-txt">
                        {{ item.title }}
                    </h3>
                    <p v-html="item.description"></p>
                    <div class="main-btn-wrapper">
                        <a :href="item.link" rel="noopener" class="explore-btn">
                            <span>LEARN MORE</span>
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/arrow-light.svg"
                                alt="arrow"
                                class="light-arrow"
                            />
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/arrow-dark.svg"
                                alt="arrow"
                                class="dark-arrow"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSliderBanner',
    props: {
        slides: Array,
    },
    mounted() {
        // window.$ = require('jquery');
        window.M = require('materialize-css');

        var elemCarousel = document.querySelector('.carousel');
        M.Carousel.init(elemCarousel, {
            fullWidth: true,
        });
        window.setInterval(function () {
            M.Carousel.getInstance(elemCarousel).next();
        }, 8000);
    },
    // created() {
    //     // this.getStock();
    // },
};
</script>

<style scoped>
@import url('~assets/css/landing-section.css');

.carousel.carousel-slider .carousel-item p {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 100%;
    height: 65px;
    /* Fallback for non-webkit */
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.main-txt-container > div:first-child {
    display: none;
}
#home {
    overflow: hidden;
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/vid-snapshot.png);
    background-size: cover;
    background-position: center;
}
#vid-bg {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    min-height: 100%;
}
#vid-details {
    position: absolute;
    display: flex;
    /* justify-content: space-around; */
    width: 100%;
    padding: 20px 30px;
    bottom: 0;
}
#vid-details h4 {
    font-size: 3rem;
}
#vid-details h4 > span {
    padding: 10px;
    display: inline-block;
    position: relative;
    background-color: transparent;
}
#vid-details h4 > span::before {
    position: absolute;
    content: '';
    transform: skew(20deg);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
#vid-details h4 > span.pry-bg::before {
    background: var(--pry-color);
}
#vid-details h4 > span.pry-bg {
    color: var(--sec-color);
}
#vid-details h4 > span.sec-bg::before {
    background: var(--sec-color);
}
#vid-details h4 > span.sec-bg {
    color: var(--pry-color);
}
#vid-details h4 > span.black-bg::before {
    background: black;
}
#vid-details h4 > span.black-bg {
    color: white;
}
#vid-details button.btn {
    background: var(--pry-color);
    position: relative;
    top: 16px;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    animation: pulse-1 2s infinite;
}
#vid-play-i {
    font-size: 2rem;
    line-height: 50px;
}

@-webkit-keyframes pulse-1 {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(241, 241, 241, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0);
    }
}
@keyframes pulse-1 {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0.4);
        box-shadow: 0 0 0 0 rgba(241, 241, 241, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(241, 241, 241, 0);
        box-shadow: 0 0 0 10px rgba(241, 241, 241, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0);
        box-shadow: 0 0 0 0 rgba(241, 241, 241, 0);
    }
}

@media (min-width: 601px) {
    .fx-scroll-list p.visible-xs {
        display: none !important;
    }
}

@media (min-width: 1300px) and (max-width: 1380px) {
    .l6.jj-lo {
        width: 43%;
    }
}

@media (min-width: 1600px) and (min-height: 1000px) {
    .carousel.carousel-slider .carousel-fixed-item.flex-div {
        left: 17%;
    }

    .main-txt-container h3.bold-txt {
        font-size: 4.5rem;
    }

    .carousel.carousel-slider .carousel-item p {
        display: block;
        display: -webkit-box;
        max-width: 100%;
        height: 95px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.8rem;
        line-height: 1.2;
    }
}

@media (min-width: 993px) {
    .carousel-nav {
        position: relative;
        width: calc(80% + 52px);
        text-align: right;
        margin: auto;
        max-width: 1280px;
        right: -29px;
    }
    #vid-bg {
        min-width: 100%;
        max-width: auto;
    }
    #vid-details {
        padding-left: 10%;
    }
}

@media (min-width: 601px) and (max-width: 992px) {
    .carousel-nav {
        position: relative;
        width: 90%;
        text-align: right;
        margin: auto;
        max-width: 1280px;
        right: -3%;
    }
}

@media (max-width: 600px) {
    .carousel-nav button {
        padding: 5px 15px;
    }
    #vid-details h4 {
        font-size: 2.3rem;
    }

    .main-txt-container {
        position: absolute;
        top: auto;
        bottom: 50px;
    }
    #vid-details {
        display: block;
        width: 100%;
        padding: 10px 10px;
    }

    /* .carousel.carousel-slider .carousel-item p {
          height: 60px;
          -webkit-line-clamp: 4;
        } */
    .main-txt-container .bold-txt {
        font-size: 2.6rem;
        margin-top: 20px;
    }
    .fx-scroll-list span.gray-bg.stock-down {
        background: #efefef;
        padding: 3px 3px;
        margin: auto 5px;
        font-weight: bold;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
}

@media (max-width: 360px) {
    .main-txt-container .bold-txt {
        font-size: 2.5rem;
    }
}
</style>
