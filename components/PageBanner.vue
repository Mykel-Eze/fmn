<template>
    <div>
        <section
            id="sec-home"
            :style="bgImage ? { backgroundImage: 'url(' + bgImage + ')' } : {}"
        >
            <div class="row">
                <div class="page-title">
                    <hr />
                    <span>{{ pageTitle }}</span>
                    <div class="portal-btn-div">
                        <a
                            rel="noopener"
                            :href="PortalUrl"
                            target="_blank"
                            class="pbd-link"
                        >
                            <span>{{ PortalBtnTitle }}</span>
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/arrow-light.svg"
                                alt="portal-arrow"
                                class="light-arrow"
                            />
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/arrow-dark.svg"
                                alt="portal-arrow"
                                class="dark-arrow"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="sharePage">
            <div class="row">
                <div class="container">
                    <div class="col s12">
                        <div class="breadcrumbs col s12 m8 pad0">
                            <span class="prioritySubpageCrumbs">
                              <span style="position: relative;top: 1px;">&#10095;</span>
                              <nuxt-link to="/priority-areas">Priority Areas</nuxt-link>
                            </span>
                            <span class="divisionsSubpageCrumbs">
                              <span style="position: relative;top: 1px;">&#10095;</span>
                              <nuxt-link to="/divisions">Divisions</nuxt-link>
                            </span>
                            <span class="sugarSubpageCrumbs">
                              <span style="position: relative;top: 1px;">&#10095;</span>
                              <nuxt-link to="/divisions/sugar">Sugar</nuxt-link>
                            </span>
                            <span style="position: relative; top: 1px"
                                >&#10095;</span
                            >
                            <nuxt-link to="">{{ pageCrumbName }}</nuxt-link>
                        </div>
                        <div
                            class="social-media-share col s12 m4 right-align pad0"
                        >
                            <div class="hidden-xs">Share this page</div>
                            <div class="sm-icons">
                                <ShareNetwork
                                    network="facebook"
                                    :url="shareUrl || pageUrl"
                                    :title="shareTitle || pageTitle"
                                    :description="shareContent"
                                >
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/facebook-c.svg"
                                        alt="facebook"
                                        style="cursor: pointer"
                                    />
                                </ShareNetwork>
                                <!-- <a
                                    href="http://www.instagram.com/?u="
                                    target="_blank"
                                >
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/instagram-c.svg"
                                        alt="instagram"
                                    />
                                </a> -->

                                <ShareNetwork
                                    network="twitter"
                                    :url="shareUrl || pageUrl"
                                    :title="shareTitle || pageTitle"
                                >
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/twitter-c.svg"
                                        alt="twitter"
                                        style="cursor: pointer"
                                    />
                                </ShareNetwork>

                                <ShareNetwork
                                    network="linkedin"
                                    :url="shareUrl || pageUrl"
                                    :title="shareTitle || pageTitle"
                                >
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/linkedin-c.svg"
                                        alt="linkedin"
                                        style="cursor: pointer"
                                    />
                                </ShareNetwork>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'PageBanner',
    props: {
        pageTitle: String,
        pageCrumbName: String,
        parentPageCrumb: String,
        parentPageCrumbLink: String,
        bgImage: {
            type: String,
            required: false,
            default: '',
        },
        shareUrl: String,
        shareTitle: String,
        shareContent: String,
        PortalBtnTitle: String,
        PortalUrl: String,
    },
    data() {
        return {
            pageUrl: '',
        };
    },
    mounted() {
        this.pageUrl = window.location.href;
    },
});
</script>

<style>
@import url('../assets/css/about.css');
.search-page section#sharePage,
.policy-page section#sharePage {
    display: none;
}
.careers-page .page-title {
    font-size: 2.7rem;
    top: auto;
    bottom: 10%;
}

.investorRelations-page .page-title {
    font-size: 2.7rem;
    top: auto;
    bottom: 10%;
}
.page-title .portal-btn-div {
    display: none;
}
.show-portal-btn .page-title .portal-btn-div {
    display: block;
}
.prioritySubpageCrumbs, .divisionsSubpageCrumbs, .sugarSubpageCrumbs {
  display: none;
}
.prioritySubpage .prioritySubpageCrumbs {
  display: inline;
}
.divisionsSubpage .divisionsSubpageCrumbs {
  display: inline;
}
.sugarSubpage .sugarSubpageCrumbs, .sugarSubpage .divisionsSubpageCrumbs {
  display: inline;
}
</style>
<style scoped>
.portal-btn-div a.pbd-link {
    background: var(--pry-color);
    border: none;
    color: white;
    display: block;
    width: 160px;
    font-size: 12px;
    text-align: center;
    height: 45px;
    margin: 20px 0 10px;
    font-family: var(--font-xlite);
}
.theme-light .investorRelations-page .portal-btn-div a.pbd-link {
    animation: pulse-1 2s infinite;
}
.theme-dark .investorRelations-page .portal-btn-div a.pbd-link {
    animation: pulse-2 2s infinite;
}
.investorRelations-page .portal-btn-div a.pbd-link:hover {
    animation: none !important;
}
.theme-dark .portal-btn-div a.pbd-link {
    background: var(--sec-color);
    color: black;
}
.portal-btn-div a.pbd-link img {
    width: 32px;
    position: relative;
    top: 13px;
    left: 5px;
}
.portal-btn-div a.pbd-link span {
    position: relative;
    top: 8px;
}
a.pbd-link img.light-arrow {
    display: initial;
}
a.pbd-link img.dark-arrow {
    display: none;
}
.theme-dark a.pbd-link img.light-arrow {
    display: none;
}
.theme-dark a.pbd-link img.dark-arrow {
    display: initial;
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
@-webkit-keyframes pulse-2 {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}
@keyframes pulse-2 {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(248, 220, 88, 0.4);
        box-shadow: 0 0 0 0 rgba(248, 220, 88, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(248, 220, 88, 0);
        box-shadow: 0 0 0 10px rgba(248, 220, 88, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(248, 220, 88, 0);
        box-shadow: 0 0 0 0 rgba(248, 220, 88, 0);
    }
}
</style>

<!--<style src="..\assets\css\about.css"></style>-->
