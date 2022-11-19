<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Sustainability"
            pageCrumbName="Sustainability"
            class="sustainability-page"
        />
        <!--=== end of Page Banner Section ===-->

        <section class="more-txt-sec">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <p>
                            <b>FMN Sustainability Statement;</b> FMN’s
                            Sustainability approach is based on respect for our
                            people, cultures and the natural environment. We are
                            committed to preserving biodiversity, reducing water
                            usage, waste and the emission of Greenhouse gases.
                            We care for the livelihood of the local communities
                            and our employees in terms of health and welfare. We
                            continually strive to improve the environmental,
                            social and economic aspects of our operations.
                        </p>
                        <p>
                            Our vision becomes reality by putting into action
                            programs and practices that optimize the use of
                            natural resources, by developing energy efficient
                            products and technologies, and by fostering
                            innovations and creative solutions adding value for
                            our clients, communities and the environment.
                        </p>
                        <p>We have the capacity to grow sustainably.</p>
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
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-1.jpg"
                                alt="image"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 m6 pad0 dfb right">
                            <div class="df-bg col s12"></div>
                            <div class="text-justify txt-secc rel">
                                <div class="title-secc-bar blue-bg">
                                    <h5>Corporate Social Responsibility</h5>
                                </div>
                                <p class="">
                                    Our CSR initiatives stem from five key areas
                                    that are fundamental to our business:
                                </p>
                                <ul class="list-secc">
                                    <li>
                                        Education, research and skills
                                        development
                                    </li>
                                    <li>Environmental Sustainability</li>
                                    <li>Health, safety, and welfare</li>
                                    <li>Infrastructural Development</li>
                                    <li>Security</li>
                                </ul>
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
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-2.jpg"
                                alt="image"
                                class="full-width"
                            />
                        </div>
                        <div class="col s12 m6 pad0 dfb">
                            <div class="text-justify txt-secc rel">
                                <div class="title-secc-bar green-bg">
                                    <h5>Backward Integration</h5>
                                </div>
                                <p class="">
                                    <b>
                                        FMN PLC has invested more than N150
                                        billion over the past ten years to
                                        execute its core business strategy to
                                        aid the agricultural sector. This
                                        investment has been made primarily in
                                        Agriculture and Infrastructure.
                                    </b>
                                </p>
                                <p>
                                    Volatile commodity prices arising from
                                    unpredictable changes in global supply and
                                    demand, exchange rate fluctuations and
                                    punitive tariffs and import barriers, has
                                    made our reliance on imported raw materials
                                    risky, expensive and unsustainable. The need
                                    to create value further back in the supply
                                    chain and reduce dependence on imported raw
                                    material has been identified as a strategic
                                    imperative for our Group in the years ahead.
                                    The investment of the next N150 billion
                                    will, therefore, focus on a strategy of
                                    backward integration to maintain growth and
                                    sustained profitability.
                                </p>
                                <p>
                                    Raw materials will be produced locally
                                    wherever possible to ensure that good
                                    quality fair value products are developed
                                    through the full supply chain from growing
                                    to final consumer consumption – from farm to
                                    fork.
                                </p>
                            </div>
                            <div class="df-bg col s12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="more-txt-sec report-section">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <h4 class="report-section-title">
                            Sustainability Reports
                        </h4>
                        <ul class="collapsible">
                            <li>
                                <div class="collapsible-header white-bg">
                                    <h5>
                                        Sustainability Report 2021
                                        <i class="material-icons"
                                            >keyboard_arrow_down</i
                                        >
                                    </h5>
                                </div>
                                <div class="collapsible-body">
                                    <div class="">
                                        <div class="">
                                            <a
                                                rel="noopener"
                                                href="/reports/FMN 2019-2020 Sustainability Report.pdf"
                                                target="_blank"
                                                class="flex-div a-block rel"
                                                download
                                            >
                                                <img
                                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/file-icon.png"
                                                    alt="file-icon"
                                                    class="file-icon"
                                                />
                                                <span>
                                                    FMN 2019-2020 Sustainability
                                                    Report
                                                </span>

                                                <i
                                                    class="
                                                        material-icons
                                                        tooltipped
                                                    "
                                                    data-position="bottom"
                                                    data-tooltip="Download"
                                                    >file_download</i
                                                >
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'Sustainability',
    components: {
        PageBanner,
    },
    mounted() {
        window.M = require('materialize-css');
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
    },
});
</script>

<style scoped>
.txt-secc {
    background-color: #f5fff7;
    padding: 90px 25px 20px;
    color: black;
}

.txt-secc p {
    font-size: 14px;
    line-height: 1.4;
}

.txt-secc-wrapper2 .txt-secc {
    background-color: #f2f8e8;
}

i.material-icons.tooltipped {
    position: absolute;
    right: 15px;
    font-weight: 100;
    opacity: 0.8;
    font-size: 18px;
    top: 15px;
}

.title-secc-bar {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 10px 20px;
    text-align: left;
}

.list-secc {
    padding-left: 20px;
}

.list-secc li {
    list-style-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/blue-tick.svg);
    padding-left: 10px;
}

.row.sec2 {
    margin-bottom: 40px;
}
h4.report-section-title {
    margin-bottom: 20px;
}

@media (min-width: 1281px) {
    .df-bg {
        background: var(--pry-color);
        background-size: cover;
        background-position: center left;
        background-repeat: no-repeat;
        width: 103% !important;
    }

    .dfb {
        width: 100% !important;
        display: flex;
    }

    .dfb .txt-secc {
        width: 100%;
    }

    .txt-secc-wrapper1,
    .txt-secc-wrapper2 {
        background-image: none;
    }

    .txt-secc-wrapper1 .df-bg {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-1.jpg);
    }

    .txt-secc-wrapper2 .df-bg {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-2.jpg);
    }
}

@media (max-width: 1280px) {
    .df-bg {
        display: none;
    }
}

@media (min-width: 601px) {
    .txt-secc-wrapper1 {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-1.jpg);
        background-size: contain;
        background-position: center left;
        background-repeat: no-repeat;
    }

    .txt-secc-wrapper2 {
        background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/sust-img-2.jpg);
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
    .txt-secc-wrapper1 {
        background-position: right;
    }
}

@media (max-width: 600px) {
    .txt-secc {
        padding: 85px 15px 15px;
        color: black;
    }
}
</style>
