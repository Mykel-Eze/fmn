<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="about.heading"
            class="historyheritage-page"
            pageCrumbName="History and Heritage"
            :bgImage="about.bg_image.url"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Sub Navigation Section ===-->
        <AboutPageSubNav class="historyheritage-page" />
        <!--=== end of Sub Navigation Section ===-->

        <!--=== Video Banner Section ===-->
        <section id="vid-and-desc">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div id="hh-video-img">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/hh-video-bg2.jpg"
                                alt="About FMN"
                                class="full-width cursor"
                                @click="showTheVideo()"
                            />
                        </div>
                        <div id="hh-video" style="display: none">
                            <iframe
                                width="100%"
                                height="500px"
                                src="https://www.youtube.com/embed/e0iHxt2WgFk?controls=0&amp;rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <!--Presently, two foreign shareholders
                            own about 56% of the company’s paid-up share
                            capital.-->
                        <p>
                            Flour Mills of Nigeria Plc (FMN) was incorporated on
                            29th September, 1960 as a private limited liability
                            company with a modest paid-up share capital of N1
                            million and converted to a public company in
                            November, 1978. The beneficial interest in the
                            company’s equity is held by Nigerian and Overseas
                            shareholders. In line with the AFS 2020, our foreign
                            shareholders include Excelsior Shipping Company
                            Limited with 62.95% shareholdings. The balance is
                            held by over 75,000 individuals and institutional
                            investors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Video Banner Section ===-->

        <section class="milestone-wrapper">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <ul class="collapsible">
                            <li>
                                <div class="collapsible-header green-bg">
                                    <h5 class="smbold-txt">
                                        Historical Highlights
                                        <i class="material-icons"
                                            >keyboard_arrow_down</i
                                        >
                                    </h5>
                                </div>
                                <div class="collapsible-body">
                                    <div class="history-wrapper">
                                        <ul>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1960 -
                                                </b>
                                                <span class="history-txt">
                                                    Flour Mills is incorporated
                                                    as a limited liability
                                                    company on the 29<sup
                                                        >th</sup
                                                    >
                                                    of September 1960.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1962 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN commissioned its first
                                                    wheat mill in Apapa with a
                                                    grinding capacity of 600
                                                    metric tons per day. Today,
                                                    that same milling complex
                                                    now has an output capacity
                                                    of over 8, 000 metric tons,
                                                    per day, making it one of
                                                    the largest single-site
                                                    mills in the world.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1964 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN commenced the production
                                                    of Semovita.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1971 -
                                                </b>
                                                <span class="history-txt">
                                                    Northern Nigeria Flour Mills
                                                    Ltd (NNFM) was incorporated
                                                    on the 29<sup>th</sup> of
                                                    October 1971.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1972 -
                                                </b>
                                                <span class="history-txt">
                                                    Flour Mills invests in
                                                    Nigerian Bag Manufacturing
                                                    Company. This is our first
                                                    investment outside of flour
                                                    milling.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1975 -
                                                </b>
                                                <span class="history-txt">
                                                    The company invests in a
                                                    large cement terminal at
                                                    Apapa and marketed its
                                                    cement under the name,
                                                    “Burham Cement.”
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1977 -
                                                </b>
                                                <span class="history-txt">
                                                    Niger Mills Company Limited
                                                    – Calabar – FMN entered into
                                                    agreement to manage and
                                                    operate Niger Mills Ltd in
                                                    the 14<sup>th</sup> of July
                                                    1977.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1978 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN converts to a public
                                                    liability company with
                                                    shares listed on the
                                                    Nigerian Stock Exchange.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1982 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN establishes its own
                                                    Registrars Department when
                                                    it took over its
                                                    shareholders register.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1997 -
                                                </b>
                                                <span class="history-txt">
                                                    Golden Fertilizer Company
                                                    Limited was incorporated on
                                                    the 12th of June 1997.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >1999 -
                                                </b>
                                                <span class="history-txt">
                                                    <b>FMN Rights Issue</b> –
                                                    The board approved a rights
                                                    issue if 156,000,000
                                                    ordinary shares of N50kobo
                                                    each at N7.70 per share.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2001 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN unveils ultra-modern
                                                    laboratory with separate
                                                    testing bakery.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2002 -
                                                </b>
                                                <span class="history-txt">
                                                    United Cement Company of
                                                    Nigeria Ltd (UNICEM) was
                                                    incorporated in September
                                                    2002 as a Joint venture
                                                    between FMN and Holcim
                                                    Trading SA of Spain.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2002 -
                                                </b>
                                                <span class="history-txt">
                                                    FMN commends rehabilitation
                                                    of Berths 1, 2 and 3 of
                                                    Apapa port complex.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2002 -
                                                </b>
                                                <span class="history-txt">
                                                    Golden Pasta Company
                                                    Limited, a fully owned
                                                    subsidiary company of FMN
                                                    commenced operations in
                                                    September 2002.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2004 -
                                                </b>
                                                <span class="history-txt">
                                                    New state-of-the-art
                                                    computerized mills of 750
                                                    mt/day were installed
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2005 -
                                                </b>
                                                <span class="history-txt">
                                                    Unicem started the
                                                    construction of a fully
                                                    integrated greenfield cement
                                                    plant (2.5 million metric
                                                    tons per annum) at
                                                    Mfamosing, near Calabar,
                                                    Cross Rivers State.New
                                                    state-of-the-art
                                                    computerized mills of 750
                                                    mt/day were installed
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2006 -
                                                </b>
                                                <span class="history-txt">
                                                    Commissioning of
                                                    Ultra-Modern Gas Plant.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2006 -
                                                </b>
                                                <span class="history-txt">
                                                    Port Terminal Operating/port
                                                    concession to operate
                                                    Terminals A and B of the
                                                    apapa Ports complex.
                                                </span>
                                            </li>
                                            <li>
                                                <b class="bold-txt history-year"
                                                    >2006 -
                                                </b>
                                                <span class="history-txt">
                                                    10,000 hectare Kaboji Farms
                                                    commences operations.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec">
            <div class="row sec1">
                <div class="container">
                    <div class="col s12 txt-secc-wrapper1 pad0">
                        <div class="col s12 visible-xs pad0">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/hh-img-1.jpg"
                                alt="image"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 m6 pad0 right">
                            <div class="text-justify txt-secc">
                                <p class="">
                                    Wheat milling forms the financial backbone
                                    of our diversified company. FMN pioneered
                                    flour milling in Nigeria when its first mill
                                    was commissioned at Apapa in 1962 with a
                                    grinding capacity of 500 metric tonnes of
                                    wheat per day. Today, the Apapa milling
                                    complex has a rated capacity of over 8,000
                                    metric tons per day making it one of the
                                    largest single site mills in the world. All
                                    the mills are manned by a team of highly
                                    trained and skilled professionals working at
                                    a high level of efficiency attested to by
                                    our ISO 9001:2008 accreditation recognizing
                                    that our flour manufacturing facilities are
                                    world class and operate within an
                                    internationally recognized Quality System.
                                    FMN had over the years made huge investments
                                    in milling technology and human capital to
                                    sustain its pre-eminent position and
                                    maintain its competitive advantage in the
                                    Nigerian flour milling industry.
                                </p>
                                <p class="">
                                    In its over six-decade history, FMN’s
                                    flagship food brand, “Golden Penny”,
                                    continues to be one of the best known and
                                    the preferred brand amongst bakers,
                                    confectioneries and consumers in Nigeria.
                                    The “Golden Penny” basket of foods has now
                                    grown to include products such as semovita,
                                    masavita, pasta, noodles, refined sugar,
                                    margarine, vegetable oils, and a range of
                                    snacks and breakfast cereals, instantly
                                    recognizable in any Nigerian household.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row sec2">
                <div class="container">
                    <div class="col s12 txt-secc-wrapper2 pad0">
                        <div class="col s12 visible-xs pad0">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/hh-img-2.jpg"
                                alt="image"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 m6 pad0">
                            <div class="text-justify txt-secc">
                                <p class="">
                                    FMN’s first investment outside Flour Milling
                                    was in BAGCO in 1978. BAGCO now a Division
                                    of FMN is a pace setter in woven
                                    polypropylene sack manufacturing. With its
                                    two giant plants at Lagos and Kano, it is by
                                    far the largest and supplier of choice to
                                    many industrial and agro-allied companies in
                                    Nigeria in the packaging of flour, cement,
                                    grains, salt, detergent, fertilizer,
                                    merchandise, farm harvests, shopping, etc.
                                    The BAGCO brand which has succeeded in
                                    gaining international recognition has also
                                    entered the export market with some of its
                                    polymer bags going to the African Continent
                                    and as far as the United States of America.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <p>
                            Another significant milestone was the company’s
                            foray into Cement. The company operated a large
                            cement terminal at Apapa and marketed its cement
                            under “Burham Cement” brand, renowned for high
                            quality and consistency. The cement terminal had a
                            handling capacity of 10,000 metric tonnes of cement
                            per day. In line with Federal Government’s backward
                            integration policy, Flour Mills invested in the
                            United Cement Manufacturing Co. Ltd. (UNICEM)
                            Calabar, in 2002. UNICEM operates a green field,
                            fully integrated cement plant, with a capacity of
                            2.5 million metric tonnes of cement per annum. In
                            2015, a strategic decision was made to dispose of
                            the investment in UNICEM and refocus the group as a
                            publicly traded, Food and Agro-Allied company that
                            strives to use locally sourced materials to develop
                            and produce unique consumer products for the local
                            markets.
                        </p>
                        <div class="gray-bg special-desc">
                            <p>
                                Beyond wheat based products, FMN Group’s
                                strategic imperative in the years ahead is to
                                create value in the supply chain and reduce
                                dependence on imported raw materials. To this
                                end, FMN has recently invested billions of Naira
                                in its agro-allied ventures. The Group’s
                                strategic diversification into agribusiness
                                began in 1978 with the investment in a 10,000ha
                                Kaboji Farm, which is close to the town of
                                Kontagora in Niger State. We have subsequently
                                made many other significant investments in
                                primary processing of locally grown soybean,
                                palm fruit, cassava, maize, and sugar cane;
                                storage, aggregation and distribution of locally
                                sourced grains and export commodities;
                                manufacture, and distribution of agro-inputs,
                                such as seeds and fertilizers. These strategic
                                investments across the major crop value chains
                                are setting the pace for others to follow and
                                continue to strengthen our position as Nigeria’s
                                Premier Food and Agro-Allied Company.
                            </p>
                            <p>
                                To ensure the continued viability and
                                sustainability of our Food and Agro-Allied
                                operations in a challenging business
                                environment, we have also invested heavily in
                                support services in the form of manufacturing
                                and marketing of packaging materials; power
                                generation; ground transport logistics; and port
                                operations; which include shipping, customs
                                clearing, forwarding, and a shipping agency.
                            </p>
                        </div>
                        <p>
                            Indeed, FMN Group is continuously exploring
                            opportunities for strategic partnerships to grow and
                            enhance competitive positioning in its main line of
                            business in Nigeria and at a future date extend its
                            investment and business activities beyond the
                            borders of Nigeria.
                        </p>
                    </div>
                </div>
            </div>
        </section>

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
    name: 'HistoryHeritage',
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
        window.M = require('materialize-css');
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
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
.txt-secc {
    background-color: #f5fff7;
    padding: 20px 25px;
    color: black;
}

.txt-secc p {
    font-size: 14px;
    line-height: 1.4;
}

.txt-secc-wrapper2 .txt-secc {
    background-color: #f2f8e8;
}

.gray-bg.special-desc {
    background-color: #f4f4f5;
    padding: 15px 40px;
    text-align: justify;
    font-size: 14px;
    line-height: 1.4;
    border-bottom: 2px solid #e0e452;
}

.gray-bg.special-desc p {
    margin: 8px auto;
}

.history-wrapper ul {
    padding: 0 20px;
}
.history-wrapper ul > li {
    list-style-type: disc;
    padding: 5px;
    text-align: justify;
}

.collapsible > li {
    margin-bottom: 10px;
}
.collapsible-header h5 {
    font-size: 1.3rem;
    margin: 2px 0;
}

.collapsible-header {
    position: relative;
}
.collapsible-header i.material-icons {
    position: absolute;
    right: 0;
    transition: 1s;
}
li.active .collapsible-header i.material-icons {
    transform: rotate(180deg);
}

@media (min-width: 601px) {
    .txt-secc-wrapper1 {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/hh-img-1.jpg);
        background-size: contain;
        background-position: center left;
        background-repeat: no-repeat;
    }

    .txt-secc-wrapper2 {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/hh-img-2.jpg);
        background-size: contain;
        background-position: center right;
        background-repeat: no-repeat;
    }

    .row.sec1 {
        margin-bottom: 0;
    }
}

@media (min-width: 1281px) {
    .txt-secc-wrapper1,
    .txt-secc-wrapper2 {
        background-size: cover;
        background-position: inherit;
    }
}

@media (min-width: 601px) and (max-width: 992px) {
    .txt-secc-wrapper1,
    .txt-secc-wrapper2 {
        background-size: cover;
    }
}

@media (max-width: 600px) {
    .txt-secc[data-v-21bfb42e] {
        padding: 5px 15px;
        color: black;
    }
}
</style>
