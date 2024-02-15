<template>
    <!--=== Footer Section ===-->
    <footer v-if="showFooter">
        <div class="row rel" id="footer-sec-1">
            <div class="container rel">
                <div class="col s12 f-sec-wrap pad0">
                    <div class="col s12 m4 l4 f-sec p-l-0">
                        <div class="col s12 l10 pad0-xs p-l-0">
                            <div class="bold-txt pry-color footer-titles">
                                {{ footer.first_column.title }}
                            </div>
                            <!-- <hr class="f-line" /> -->
                            <div
                                class="links--a"
                                v-html="footer.first_column.content"
                            ></div>
                        </div>
                    </div>

                    <div class="col s12 m4 l4 f-sec">
                        <div class="col s12 l10 pad0-xs">
                            <div
                                class="bold-txt pry-color center footer-titles"
                            >
                                {{ footer.second_column['0'].title }}
                            </div>
                            <p
                                class="center"
                                v-html="footer.second_column['0'].content"
                            ></p>
                            <div class="center footer-social">
                                <a
                                    v-for="link in smlink.links"
                                    :key="link.id"
                                    :href="link.link"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <img
                                        :src="link.black_icon"
                                        :alt="link.name"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m4 l4 f-sec p-r-0">
                        <div class="col s12 pad0-xs p-r-0">
                            <div class="bold-txt pry-color right-align footer-titles">
                                Newsletter
                            </div>
                            <div class="input-field flex-div">
                                <input required type="email" v-model="email" placeholder="enter your email" id="newsletter-input"/>
                                <button type="submit" id="newsletter-btn" class="modal-trigger" data-target="updates-modal">
                                    Subscribe
                                </button>
                            </div>
                            <!-- <form @submit.prevent="submitNewsletter">
                                <div class="input-field flex-div">
                                    <input required v-model="email" type="email" placeholder="enter your email" id="newsletter-input"/>
                                    <button type="submit" id="newsletter-btn" class="modal-trigger" data-target="updates-modal">
                                        Send me updates
                                    </button>
                                </div>
                            </form> -->
                        </div>
                    </div>
                </div>
            </div>

            <img src="~/assets/images/CGRS-Badge.svg" alt="CGRS Badge" class="cgrs-badge">
        </div>

        <div class="row rel" id="footer-sec-2">
            <div class="container">
                <div class="col s12 pad0-xs">
                    <div class="col s6 m3 l3 f-sec p-l-0">
                        <div class="col s12 m10 pad0-xs p-l-0">
                            <div class="bold-txt footer-titles">Investors</div>
                            <hr class="f-line" />
                            <ul>
                                <li>
                                    <nuxt-link to="/investor-relations"
                                        >Annual Reports</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link to="/sustainability"
                                        >Sustainability</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col s6 m3 l3 f-sec">
                        <div class="col s12 m10 pad0-xs center">
                            <div class="bold-txt footer-titles center">
                                About FMN
                            </div>
                            <hr class="f-line" />
                            <ul>
                                <li>
                                    <nuxt-link to="/management-team"
                                        >Management Team</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link to="/about"
                                        >The FMN Group</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col s6 m3 l3 f-sec">
                        <div class="col s12 m10 pad0-xs center">
                            <div class="bold-txt footer-titles">
                                Quick Links
                            </div>
                            <hr class="f-line" />
                            <ul>
                                <li>
                                    <nuxt-link to="/careers">Careers</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/contact"
                                        >Contact Us</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col s6 m3 l3 f-sec p-r-0">
                        <div
                            class="
                                col
                                s12
                                m10
                                pad0-xs
                                p-r-0
                                right-align right-lg
                            "
                        >
                            <div class="bold-txt footer-titles">Media</div>
                            <hr class="f-line" />
                            <ul>
                                <li>
                                    <nuxt-link to="/gallery">Gallery</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/blog">Blog</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col s12 pad0-xs center disclaimer-div">
                        <div class="col m8 offset-m2">
                            <p>
                                Disclaimer: This is to notify all applicants to
                                disregard any request for money to process your
                                application. Please note that FMN will never
                                request for money from applicants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row rel center flex-div" id="copyright-footer">
            <div class="copyright-sec">
                Copyright © 2020 FMN Plc. All rights reserved.
            </div>
            <div class="policy-links">
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                <span> | </span>
                <nuxt-link to="/cookies-policy">Cookies Policy</nuxt-link>
            </div>
        </div>

        <SendMeUpdatesModal />
    </footer>
    <!--=== end of Footer Section ===-->
</template>

<script lang="ts">
import Vue from 'vue';
import SendMeUpdatesModal from './SendMeUpdatesModal.vue';

export default Vue.extend({
    name: 'Footer',
    components: { SendMeUpdatesModal },
    data() {
        return {
            footer: {},
            smlink: {},
            showFooter: false,
            email: '',
            loading: false,
        };
    },
    mounted() {
        // window.M = require('materialize-css');
    },
    methods: {
        async getFooter() {
            const res = await this.$axios.get('footer');

            if (res.status === 200) {
                this.footer = res.data;
                if (Object.keys(this.footer).length > 0) {
                    this.showFooter = true;
                }
            }

            const sm = await this.$axios.get('social-media');
            if (sm.status === 200) {
                this.smlink = sm.data;
            }
        },
        // postMessage() {
        //   const emailValue = document.querySelector("#newsletter-input").value
        //   document.querySelector(".modal input#email").value = emailValue
        //   document.querySelectorAll("#email-field label").classList.add("active")
        // }


        // async submitNewsletter() {
        //     this.loading = true;
        //     const res = await this.$axios.post('newsletters', {
        //         email: this.email,
        //     });
        //     this.loading = false;
        //     if (res.status === 200) {
        //         //@ts-ignore
        //         M.toast({
        //             html: '<i class="material-icons">check_circle</i> <span style="padding-left: 10px;">Subscription to newsletter was successful</span>',
        //             displayLength: 4000,
        //         });
        //         this.email = '';
        //     } else {
        //         //@ts-ignore
        //         M.toast({
        //             html:
        //                 '<i class="material-icons">error_outline</i> <span style="padding-left: 10px;">' +
        //                 res.statusText +
        //                 '</span>',
        //             displayLength: 4000,
        //         });
        //     }
        // },
    },
    created() {
        this.getFooter();
    },
});
</script>

<style scoped>
@import url('~assets/css/home.css');
a {
    color: #fff !important;
}

.bold-txt {
    font-family: var(--font);
    font-weight: bold;
}
.theme-light .f-sec a {
    color: black !important;
}
</style>

<style>
footer {
  position: relative;
}
input#newsletter-input:focus {
    box-shadow: none;
}
div#footer-sec-1 {
    padding: 40px 0 50px;
}
div#footer-sec-1::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #f4f4f5;
    background-image: url(https://flourmills.s3.eu-central-1.amazonaws.com/images/globe-img.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.theme-dark div#footer-sec-1::before {
    opacity: 0.4;
}

.theme-dark div#footer-sec-1 {
    background-color: #6c707a;
    color: white;
}

footer a i.material-icons.pry-color {
    font-size: 11px;
    position: relative;
    top: 2px;
}

.footer-titles {
    font-size: 16px;
}

.theme-dark .footer-titles.pry-color {
    color: var(--sec-color);
}

.f-sec p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.3;
}

.footer-social a {
    margin: 3px;
}

.f-sec ul {
    margin-top: 10px;
}

.f-sec ul > li > a {
    color: black;
    font-size: 14px;
}

.f-sec ul > li > a:hover {
    text-decoration: underline;
}

.theme-dark .f-sec ul > li > a {
    color: white;
}

input#newsletter-input {
    background: white;
    border: 3px solid #888;
    height: 2.5rem;
    padding-left: 5px;
    padding-right: 5px;
}

button#newsletter-btn {
    height: 2.9rem;
    border: 3px solid #60646c;
    background: #60646c;
    color: white;
    font-size: 12px;
    width: 50%;
    cursor: pointer;
}
button#newsletter-btn:hover {
  background-color: var(--pry-color);
  border-color: var(--pry-color);
}

div#footer-sec-2 {
    margin-top: 40px;
    padding-top: 10px;
}

.disclaimer-div {
    margin: 25px 0 0;
}

.disclaimer-div p {
    font-size: 11px;
}

div#copyright-footer {
    background-color: #6c707a;
    color: white;
    margin-bottom: 0;
    justify-content: center;
    padding: 12px 0 10px;
    font-size: 12px;
    align-items: center;
}

.policy-links a {
    color: white;
    font-weight: bold;
    padding: 3px;
}

img.cgrs-badge {
  position: absolute;
  width: 100px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
}

@media (min-width: 1200px) {
    .p-l-0 {
        padding-left: 0 !important;
    }
    .p-r-0 {
        padding-right: 0 !important;
    }
    .right-lg {
        float: right !important;
    }
}

@media (max-width: 992px) {
    div#footer-sec-2 {
        margin-top: 0px;
        padding-top: 30px;
    }

    div#footer-sec-1 {
        padding: 40px 0 50px;
    }

    div#footer-sec-1 .f-sec:nth-child(2) p,
    div#footer-sec-1 .f-sec:nth-child(2) .footer-titles,
    .right-align.footer-titles {
        text-align: left;
    }

    .center.footer-social {
        text-align: left;
        margin-bottom: 10px;
    }

    .f-sec .input-field.flex-div,
    .f-sec p {
        margin-top: 5px;
    }

    .f-sec ul {
        margin-top: 3px;
    }
}

@media (min-width: 601px) and (max-width: 992px) {
    .f-sec-wrap .f-sec > div.pad0-xs {
        padding: 0;
    }
}

@media (min-width: 601px) {
    .copyright-sec {
        margin-right: 2%;
    }
}

@media (max-width: 600px) {
    div#copyright-footer {
        flex-flow: column-reverse;
    }

    .copyright-sec {
        padding-bottom: 3px;
    }

    .f-sec-wrap {
        display: flex;
        flex-direction: column-reverse;
    }

    .f-sec:nth-child(even) > div,
    .f-sec:nth-child(even) div.footer-titles {
        text-align: right;
    }

    .f-sec:nth-child(odd) > div {
        text-align: left;
    }
}
</style>
