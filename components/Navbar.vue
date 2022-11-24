<template>
    <div>
        <nav class="trans-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <nuxt-link to="/" class="brand-logo">
                        <div class="flex-div">
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fmn-logo-black.png"
                                alt="FMN"
                                class="logo logo-1"
                            />
                            <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fmn-logo-white.png"
                                alt="FMN"
                                class="logo logo-2"
                            />
                            <!-- <hr class="logo-divider" /> -->
                            <!-- <img
                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fmn-60.png"
                                alt="FMN 60th anniversary"
                                class="logo logo-3"
                            /> -->
                        </div>
                    </nuxt-link>
                    <a
                        rel="noopener"
                        href="#"
                        data-target="slide-out"
                        class="sidenav-trigger sec-color right"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/menu-icon.svg"
                            alt="menu"
                            class="menu-icon-img"
                        />
                    </a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <div class="other-action-links">
                            <ul class="rel">
                                <li>
                                    <form
                                        @submit.prevent="searchFunc"
                                        id="search-nav-form"
                                        class="rel"
                                    >
                                        <input
                                            type="search"
                                            name="search"
                                            id="nav-search"
                                            class="nav-search"
                                            v-model="query"
                                        />
                                        <button
                                            type="submit"
                                            id="si1"
                                            class="si1"
                                        >
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/search-gray.svg"
                                                alt="search"
                                            />
                                        </button>
                                    </form>
                                </li>
                                <li class="theme-selector">
                                    <button
                                        aria-label="Enable light theme"
                                        aria-pressed="false"
                                        role="switch"
                                        type="button"
                                        id="theme-light-button"
                                        class="
                                            theme-button
                                            enabled
                                            light-mode-btn
                                        "
                                        onclick="enableTheme('light', true)"
                                    >
                                        <img
                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/light-mode.svg"
                                            alt="light-mode"
                                        />
                                    </button>
                                    <button
                                        aria-label="Enable dark theme"
                                        aria-pressed="false"
                                        role="switch"
                                        type="button"
                                        id="theme-dark-button"
                                        class="theme-button dark-mode-btn"
                                        onclick="enableTheme('dark', true)"
                                    >
                                        <img
                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/dark-mode.svg"
                                            alt="dark-mode"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="main-action-links">
                            <li>
                                <nuxt-link class="active" to="/"
                                    >Home</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/about">About</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/investor-relations">
                                    Investors
                                </nuxt-link>
                            </li>
                            <!-- <li>
                                <nuxt-link
                                    to=""
                                    class="dropdown-trigger"
                                    data-target="dropdown0"
                                    >Our Impact
                                </nuxt-link>
                                <ul id="dropdown0" class="dropdown-content">
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/feeding-the-nation">
                                            Feeding the Nation Everyday
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link
                                            to="/diversity-and-inclusion"
                                        >
                                            Diversity and Inclusion
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li> -->
                            <li>
                                <nuxt-link to=""
                                  class="dropdown-trigger"
                                  data-target="sustainability-dropdown"
                                >
                                  Sustainability
                                </nuxt-link>
                                <!-- Dropdown Structure -->
                                <ul id="sustainability-dropdown" class="dropdown-content">
                                    <li>
                                        <nuxt-link to="/purpose">
                                          Purpose
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/approach">
                                          Our Approach
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/priority-areas">
                                          Priority Areas
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/reporting">
                                            Reporting
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/divisions">
                                            Divisions
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/awards">
                                            Awards
                                        </nuxt-link>
                                    </li>
                                    <!-- <div class="arrow-up"></div> -->
                                </ul>
                            </li>
                            <li>
                                <nuxt-link
                                    to=""
                                    class="dropdown-trigger"
                                    data-target="dropdown1"
                                    >Brands
                                </nuxt-link>
                                <!-- Dropdown Structure -->
                                <ul id="dropdown1" class="dropdown-content">
                                    <li>
                                        <nuxt-link to="/foods">
                                            Foods
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/agro-allied">
                                            Agro-Allied
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/sugar">
                                            Sugar
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/logistics">
                                            Support Services
                                        </nuxt-link>
                                    </li>
                                    <!-- <div class="arrow-up"></div> -->
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/careers">Careers</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    to=""
                                    class="dropdown-trigger"
                                    data-target="dropdown2"
                                    >Media
                                </nuxt-link>
                                <!-- Dropdown Structure -->
                                <ul id="dropdown2" class="dropdown-content">
                                    <li>
                                        <nuxt-link to="/press-release">
                                            Press Release
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link
                                            to="/blog"
                                            class="sidenav-close"
                                        >
                                            Blog
                                        </nuxt-link>
                                    </li>
                                    <li class="divider" tabindex="-1"></li>
                                    <li>
                                        <nuxt-link to="/gallery"
                                            >Gallery</nuxt-link
                                        >
                                    </li>
                                    <!-- <div class="arrow-up"></div> -->
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/contact">Contact</nuxt-link>
                            </li>
                            <li>
                                <span>
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/eng-lang.svg"
                                        alt="eng-lang"
                                        class="lang-img"
                                    />
                                </span>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav black-txt">
            <div class="sidenav-logo">
                <nuxt-link to="/" class="sidenav-close">
                    <img
                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fmn-logo.svg"
                        alt="FMN"
                        class="logo logo-1"
                    />
                </nuxt-link>
            </div>
            <div class="flex-div">
                <div class="theme-selector">
                    <button
                        aria-label="Enable light theme"
                        aria-pressed="false"
                        role="switch"
                        type="button"
                        id="theme-light-button"
                        class="theme-button enabled light-mode-btn"
                        onclick="enableTheme('light', true)"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/light-mode.svg"
                            alt="light-mode"
                        />
                    </button>
                    <button
                        aria-label="Enable dark theme"
                        aria-pressed="false"
                        role="switch"
                        type="button"
                        id="theme-dark-button"
                        class="theme-button dark-mode-btn"
                        onclick="enableTheme('dark', true)"
                    >
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/dark-mode.svg"
                            alt="dark-mode"
                        />
                    </button>
                </div>
                <form
                    @submit.prevent="searchFunc"
                    class="mobile-nav-search-form"
                >
                    <input
                        type="search"
                        name="search"
                        id="nav-search2"
                        class="nav-search"
                        v-model="query"
                    />
                    <button type="submit" id="si1a" class="si1">
                        <img
                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/search-gray.svg"
                            alt="search"
                        />
                    </button>
                </form>
            </div>
            <li>
                <nuxt-link class="active sidenav-close" to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link class="sidenav-close" to="/about">About </nuxt-link>
            </li>
            <li>
                <nuxt-link class="sidenav-close" to="/investor-relations">
                    Investors
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    to=""
                    class="dropdown-trigger"
                    data-target="dropdown0-m"
                >
                    Sustainability
                    <i class="material-icons abdr-down" id="about--dropdown">
                        keyboard_arrow_down
                    </i>
                </nuxt-link>
                <!-- Dropdown Structure -->
                <ul id="dropdown0-m" class="dropdown-content">
                    <li>
                        <nuxt-link to="/purpose" class="sidenav-close">
                            Purpose
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link
                            to="/approach"
                            class="sidenav-close"
                        >
                            Our Approach
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link
                            to="/priority-areas"
                            class="sidenav-close"
                        >
                            Priority Areas
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link
                            to="/reporting"
                            class="sidenav-close"
                        >
                            Reporting
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link
                            to="/divisions"
                            class="sidenav-close"
                        >
                            Divisions
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link
                            to="/awards"
                            class="sidenav-close"
                        >
                            Awards
                        </nuxt-link>
                    </li>
                    <!-- <div class="arrow-up"></div> -->
                </ul>
            </li>
            <li>
                <nuxt-link
                    to=""
                    class="dropdown-trigger"
                    data-target="dropdown3"
                >
                    Brands
                    <i class="material-icons abdr-down" id="about--dropdown">
                        keyboard_arrow_down
                    </i>
                </nuxt-link>
                <!-- Dropdown Structure -->
                <ul id="dropdown3" class="dropdown-content">
                    <li>
                        <nuxt-link to="/foods" class="sidenav-close">
                            Foods
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link to="/agro-allied" class="sidenav-close">
                            Agro-Allied
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link to="/sugar" class="sidenav-close">
                            Sugar
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link to="/logistics" class="sidenav-close">
                            Logistic Support
                        </nuxt-link>
                    </li>
                    <!-- <div class="arrow-up"></div> -->
                </ul>
            </li>
            <li>
                <nuxt-link to="/careers" class="sidenav-close">
                    Careers
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    to=""
                    class="dropdown-trigger"
                    data-target="dropdown4"
                >
                    Media
                    <i class="material-icons abdr-down" id="about--dropdown">
                        keyboard_arrow_down
                    </i>
                </nuxt-link>
                <!-- Dropdown Structure -->
                <ul id="dropdown4" class="dropdown-content">
                    <li>
                        <nuxt-link to="/press-release" class="sidenav-close">
                            Press Release
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link to="/blog" class="sidenav-close">
                            Blog
                        </nuxt-link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                        <nuxt-link to="/gallery" class="sidenav-close">
                            Gallery
                        </nuxt-link>
                    </li>
                    <!-- <div class="arrow-up"></div> -->
                </ul>
            </li>
            <li>
                <nuxt-link to="/contact" class="sidenav-close"
                    >Contact</nuxt-link
                >
            </li>

            <div class="sidenav-contacts">
                <div class="footer-links-li center">
                    <div>
                        <div class="social-icons">
                            <a
                                href="https://www.facebook.com/FMNGroup"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fb-green.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/thefmngroup/"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/ig-green.svg"
                                    alt="instagram"
                                />
                            </a>
                            <a
                                href="https://twitter.com/theFMNGroup"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/tw-green.svg"
                                    alt="twitter"
                                />
                            </a>
                            <a
                                href="https://linkedin.com/company/the-fmn-group/"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="https://flourmills.s3.eu-central-1.amazonaws.com/images/ln-green.svg"
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <a rel="noopener" class="black-txt"
                            >contactus@fmnplc.com</a
                        >
                    </div>
                    <div class="pry-color bold-txt">
                        <p>© Flour Mill of Nigeria 2020, all rights reserved</p>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    mounted() {
        window.M = require('materialize-css');
        // document.addEventListener('DOMContentLoaded', function () {
        var elemsSidenav = document.querySelectorAll('.sidenav');
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        // var elemsDropdown3 = document.querySelectorAll(".dropdown-trigger.dtr");
        M.Sidenav.init(elemsSidenav);
        M.Dropdown.init(elemsDropdown, {
            hover: false,
            constrainWidth: false,
            coverTrigger: false,
        });
        // });
    },
    methods: {
        searchFunc() {
            this.$router.push(`/search-page?query=${this.query}`);
        },
    },
    data() {
        return {
            query: '',
        };
    },
};
</script>

<style>
.theme-light #about--dropdown {
    border-top: 1px solid white;
}
nav.trans-nav ul a:hover {
    background-color: transparent;
    color: var(--pry-color) !important;
}
.flex-div {
    align-items: start;
}
hr.logo-divider {
    width: 1px;
    height: 65px;
    border: none;
    background: black;
    margin: 5px;
    position: relative;
    top: 35px;
    opacity: 0.1;
}
.theme-dark hr.logo-divider {
    background: white;
}
img.logo.logo-3 {
    width: 80px;
    top: 24px;
}
nav.scrolled-nav a.brand-logo img.logo.logo-3 {
    top: 3px;
    width: 55px;
}
nav.scrolled-nav a.brand-logo hr.logo-divider {
    height: 40px;
    top: 9px;
}
</style>
