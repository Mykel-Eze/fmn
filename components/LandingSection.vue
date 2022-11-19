<template>
    <!--=== Home Section ===-->
    <section id="home">
        <div class="row full-height">
            <!-- Slideshow container -->
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

            <!-- <a href="https://prizeforinnovation.fmnplc.com" class="link-overlay"></a> -->

            <!-- Video container -->
            <!-- <VideoBanner hidden /> -->
            <!-- Add the hidden attribute to hide section -->

            <!-- Stock Widget for PC -->
            <div class="stock-widget">
                <div class="bold-txt center" style="color: #000">STOCK</div>
                <div class="stock-title">
                    <h5 class="bold-txt">FLOURMIL:NL</h5>
                </div>
                <div class="stock-price center">
                    <small>NGN </small>
                    <span class=""> {{ price }} </span>
                </div>
                <div class="stock-raise">
                    <!-- Use "stock-up" for profits -->
                    <!-- Use "stock-down" for losses -->
                    <!-- Remove class if raise is neither profit/loss i.e zero -->
                    <span class="center">{{ percentage }}</span>
                </div>
                <div class="stock-date center">
                    <span class="today">{{ date }}</span>
                </div>
            </div>
            <div class="carousel-nav flex-div" style="display: none">
                <!-- Stock Widget for Mobile -->
                <div class="fx-scroll-list">
                    <p class="flex-div visible-xs">
                        <span class="bold-txt pry-color">FLOURMIL:NL</span> -
                        <span class="bold-txt">NGN {{ price }}</span>
                        <span class="gray-bg">{{ percentage }}</span>
                        <span class="today"> {{ date }}</span>
                    </p>
                </div>
                <div style="width: 150px">
                    <button @click="prevFunc()" class="prevtBtn">
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/home-prev.svg"
                            alt="previous"
                        />
                    </button>
                    <button @click="nextFunc()" class="nextBtn">
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/home-next.svg"
                            alt="next"
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Home Section ===-->
</template>

<script>
// import VideoBanner from '@/components/VideoBanner.vue';
// import ImageSliderBanner from '@/components/ImageSliderBanner.vue';
export default {
    name: 'LandingSection',
    components: {
        // VideoBanner,
        // ImageSliderBanner
    },
    props: {
        slides: Array,
    },
    data() {
        return {
            price: '0.00',
            percentage: '0%',
            date: '0/0/0',
        };
    },
    mounted() {
        window.$ = require('jquery');
        window.M = require('materialize-css');

        var elemCarousel = document.querySelector('.carousel');
        M.Carousel.init(elemCarousel, {
            fullWidth: true,
        });
        window.setInterval(function () {
            M.Carousel.getInstance(elemCarousel).next();
        }, 8000);

        var today = new Date();
        var date =
            today.getDate() +
            '/' +
            (today.getMonth() + 1) +
            '/' +
            today.getFullYear();
        this.date = date;
        // document.querySelector('.today').innerHTML = date;
        document.querySelectorAll('.today').forEach((item) => {
            item.innerHTML = date;
        });
        $(window).scroll(function () {
            $('.stock-widget').toggleClass(
                'stock-widget-show',
                $(this).scrollTop() > 400
            );
        });
        this.getStock();
    },
    methods: {
        nextFunc() {
            var elemsCarousel = document.querySelector('.carousel');
            M.Carousel.getInstance(elemsCarousel).next();
        },
        prevFunc() {
            var elemsCarousel = document.querySelector('.carousel');
            M.Carousel.getInstance(elemsCarousel).prev();
        },
        async getStock() {
            const stock = await this.$axios.get('stock');
            if (stock.status === 200) {
                this.price = stock.data.price;
                this.percentage = stock.data.percentage;
            }
        },
    },
    created() {
        // this.getStock();
    },
};
</script>

<!--<style src="..\assets\css\landing-section.css"></style>-->

<style scoped>
@import url('~assets/css/landing-section.css');

.carousel.carousel-slider .carousel-item p {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 100%;
    height: 70px;
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
    /* background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/vid-snapshot.png); */
    background-size: cover;
    background-position: center;
    background-color: lightgray;
    z-index: 1;
}
.theme-dark #home {
    background-color: #111111;
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
    /* .carousel.carousel-slider .carousel-fixed-item.flex-div {
        left: 17%;
    } */

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
