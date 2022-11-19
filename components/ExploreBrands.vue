<template>
    <section id="explore-brands">
        <div class="container te">
            <h4 class="center">
                <span>Explore a selection of our brands</span>
                <hr class="te-hr" />
            </h4>
        </div>

        <div class="row">
            <div class="container">
                <div class="explore-brands">
                    <div>
                        <a
                            v-for="(item, index) in brands"
                            :key="index"
                            :href="item.link"
                            rel="noopener"
                        >
                            <img
                                :src="item.logo.url"
                                :alt="item.name"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    name: 'ExploreBrands',
    props: {
        brands: {
            type: Array,
        },
    }
    // mounted() {
    //     window.M = require('materialize-css');
    //     var elemCarousel = document.querySelectorAll('.eb-carousel');
    //     M.Carousel.init(elemCarousel, {
    //         fullWidth: true,
    //     });
    // },
});
</script>

<style>
#explore-brands h4 {
    font-weight: bolder;
}

.explore-brands {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 30px;
}

.explore-brands > div {
    display: flex;
    justify-content: space-around;
    animation: marquee1 20s linear infinite;
}
/* .explore-brands > div > a{
        display: block;
    } */
.gp-img {
    width: 90%;
}

.theme-dark .te h4 span {
    background: #111111;
    padding: 0 10px;
}

.theme-light .te h4 span {
    background: white;
    padding: 0 10px;
}

hr.te-hr {
    margin-top: -15px;
    background: white;
    border: none;
    height: 1px;
}

.theme-light hr.te-hr {
    background: #6c707a;
}

.container.te {
    margin-bottom: 20px;
}

@keyframes marquee1 {
    0% {
        transform: translate(50%, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}

@keyframes marquee2 {
    0% {
        transform: translate(20%, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}

@keyframes marquee3 {
    0% {
        transform: translate(10%, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}

@media (max-width: 992px) {
    /* .explore-brands > div {
            animation: marquee2 30s linear infinite;
        } */
}

@media (max-width: 600px) {
    /* .explore-brands > div {
            animation: marquee3 30s linear infinite;
        } */

    #explore-brands h4 {
        font-size: 1.5rem;
    }
}
</style>
