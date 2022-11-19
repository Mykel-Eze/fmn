<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            :pageTitle="contact.content['0'].heading"
            :bgImage="
                contact.content['0'].bg_image
                    ? contact.content['0'].bg_image.url
                    : ''
            "
            class="contact-page"
        />
        <!--=== end of Page Banner Section ===-->

        <section id="map-div">
            <div class="row">
                <div class="container">
                    <div>
                        <iframe
                            id="gmap_canvas"
                            src="https://www.google.com/maps/d/embed?mid=1M6ggTmoPQCMqLRou9VhjKOM_vdY"
                            width="100%"
                            height="400"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section id="body-div">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div class="col s12 m6">
                            <div>
                                <a rel="noopener">info@fmnplc.com</a>
                                <div class="social-links">
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="social-icon"
                                        rel="noopener"
                                    >
                                        <img
                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/ig-green.svg"
                                            alt="instagram"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="social-icon"
                                        rel="noopener"
                                    >
                                        <img
                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/fb-green.svg"
                                            alt="facebook"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="social-icon"
                                        rel="noopener"
                                    >
                                        <img
                                            src="https://flourmills.s3.eu-central-1.amazonaws.com/images/tw-green.svg"
                                            alt="twitter"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="social-icon"
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
                                <h5 class="bold-txt pref-platform-txt">
                                    Want to reach us? <br />
                                    Choose your preferred platform
                                </h5>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="flex-div contact--div">
                                <div class="contact-img-div">
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/location.svg"
                                        alt="location"
                                    />
                                </div>
                                <div class="contact-detail-div">
                                    <div class="bold-txt">Corporate HQ</div>
                                    <span
                                        >1 Golden Penny Place, Wharf Road,
                                        <br />
                                        Apapa, Lagos State, Nigeria.</span
                                    >
                                </div>
                            </div>

                            <div class="flex-div contact--div">
                                <div class="contact-img-div">
                                    <img
                                        src="https://flourmills.s3.eu-central-1.amazonaws.com/images/telephone.svg"
                                        alt="phone"
                                    />
                                </div>
                                <div class="contact-detail-div">
                                    <div class="cddd">
                                        <a
                                            href="tel:+2347056891000"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056891000</span>
                                        </a>
                                        <a
                                            href="tel:+2347056891111"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056891111</span>
                                        </a>
                                        <br />
                                        <a
                                            href="tel:+2347056892000"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056892000</span>
                                        </a>
                                        <a
                                            href="tel:+2347056892222"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056892222</span>
                                        </a>
                                        <br />
                                        <a
                                            href="tel:+2347056893000"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056893000</span>
                                        </a>
                                        <a
                                            href="tel: +2347056893333"
                                            rel="noopener"
                                        >
                                            <i class="material-icons pry-color"
                                                >lens</i
                                            >
                                            <span>+234&nbsp;7056893333</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="body-div-2">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div class="col s12 m6 form-div">
                            <h5 class="bold-txt">Leave us a message</h5>

                            <form
                                @submit.prevent="submitForm"
                                class="col s12 m11 pad0"
                            >
                                <div class="input-field col s12 pad0">
                                    <input
                                        required
                                        id="first_name"
                                        type="text"
                                        class=""
                                        placeholder="What is your first name?"
                                        v-model="data.firstName"
                                    />
                                </div>
                                <div class="input-field col s12 pad0">
                                    <input
                                        required
                                        id="last_name"
                                        type="text"
                                        class=""
                                        placeholder="What is your last name?"
                                        v-model="data.lastName"
                                    />
                                    <label for="last_name"></label>
                                </div>
                                <div class="input-field col s12 pad0">
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        class=""
                                        placeholder="Can we have your email address to contact you?"
                                        v-model="data.email"
                                    />
                                </div>
                                <div class="input-field col s12 pad0">
                                    <select required v-model="data.inquiry">
                                        <option value="" disabled selected>
                                            What is your inquiry about?
                                        </option>
                                        <option
                                            value="Product enquiries for business"
                                        >
                                            Product enquiries for business
                                        </option>
                                        <option
                                            value="Product enquiries for consumer"
                                        >
                                            Product enquiries for consumer
                                        </option>
                                        <option value="Sponsorships">
                                            Sponsorships
                                        </option>
                                        <option value="Investor Relations">
                                            Investor Relations
                                        </option>
                                        <option value="Procurement & Supply">
                                            Procurement & Supply
                                        </option>
                                        <option value="Agro-Allied">
                                            Agro-Allied
                                        </option>
                                        <option value="Consumer Complaints">
                                            Consumer Complaints
                                        </option>
                                        <option value="Career">Career</option>
                                    </select>
                                </div>
                                <div class="input-field col s12 pad0">
                                    <textarea
                                        v-model="data.message"
                                        required
                                        id="message"
                                        class="materialize-textarea"
                                        placeholder="What is your message?"
                                    ></textarea>
                                </div>
                                <div class="col s12 pad0">
                                    <button class="submit-btn" type="submit">
                                        {{
                                            loading
                                                ? 'Submitting...'
                                                : 'Leave a message'
                                        }}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="col s12 m6 pad0-xs">
                            <div class="col s12 locations-div gray-bg">
                                <h5 class="bold-txt">FMN Business Locations</h5>
                                <ul class="collapsible">
                                    <li>
                                        <div class="collapsible-header rel">
                                            Agro-Allied
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/d-arrow.svg"
                                                alt="d-arrow"
                                                class="d-arrow"
                                            />
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="location">
                                                <div class="bold-txt">
                                                    PREMIER FEED MILLS COMPANY
                                                    LIMITED (Top Feeds)
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1 Eagle Flour Road,
                                                        Lagos/Ibadan Expressway,
                                                        Toll Point, Ibadan
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348150744896"
                                                            >0815 074 4896</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >Opeifa.olutoyin@premierfeedsltd.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    ROM OIL MILLS LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Ibadan Ijebu ode road,
                                                        Idi Ayunre Junction,
                                                        Ibadan Oyo state
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >harish.shuklah@romoilmills.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    PREMIUM CASSAVA PRODUCTS
                                                    LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span
                                                        >Premium Cassava
                                                        Products Limited,
                                                        Ososa</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    AGRI PALM LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Iguobanor Estate before
                                                        Okada junction,
                                                        Lagos-Benin express way
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348189634199"
                                                            >0818 963 4199</a
                                                        ></span
                                                    >
                                                </div>
                                                <div class="location">
                                                    <div class="bold-txt">
                                                        SUNFLAG FARM LIMITED
                                                    </div>
                                                    <div class="addr">
                                                        <span
                                                            >Rabba road, Niger
                                                            state</span
                                                        >
                                                    </div>
                                                </div>
                                                <div class="location">
                                                    <div class="bold-txt">
                                                        SHAO GOLDEN FARMS
                                                        LIMITED
                                                    </div>
                                                    <div class="addr">
                                                        <span
                                                            >N0 1. Forest road,
                                                            Ilorin</span
                                                        >
                                                        <br />
                                                        <span
                                                            >Tel:
                                                            <a
                                                                rel="noopener"
                                                                href="tel:+2348189634246"
                                                                >0818 963
                                                                4246</a
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
                                                <div class="location">
                                                    <div class="bold-txt">
                                                        AGRI ESTATES LIMITED
                                                    </div>
                                                    <div class="addr">
                                                        <span
                                                            >1, Golden Penny
                                                            Place, Wharf Road,
                                                            Apapa, Lagos</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    KABOJI FARMS LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Kaboji Farms limited,
                                                        Kaboji Village Via
                                                        Kintagora, Niger State.
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348052981224"
                                                            >0805 298 1224</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >kobus.dejager@yahoo.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    BEST CHICKENS LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Alomaja Village,
                                                        Idi-Ayunre Road Ibadan,
                                                        Oyo State
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348160619555"
                                                            >0816 061 9555</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >hussein.sabra@premierfeedsltd.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    SUNTI GOLDEN SUGAR ESTATES
                                                    LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        JA’ Agi Eppa Road,
                                                        Mokwa, Niger State
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348090400289"
                                                            >0809 040 0289</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >kobus.dejager@yahoo.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN AGRI INPUTS LTD
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place,
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348113394472"
                                                            >0811 339 4472</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >sfalade@fmnplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    PREMIER POULTRY PROCESSORS
                                                    LTD
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1 Eagle Flour Road,
                                                        Lagos/Ibadan Expressway,
                                                        Toll Point, Ibadan
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="collapsible-header rel">
                                            Food
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/d-arrow.svg"
                                                alt="d-arrow"
                                                class="d-arrow"
                                            />
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="location">
                                                <div class="bold-txt">
                                                    NORTHERN NIGERIA FLOUR MILLS
                                                    PLC
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        15, Maimalari Road,
                                                        Bompai Industrial
                                                        Estate, Kano
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348033345177"
                                                            >08033345177</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >ramatu.manzo@nnfmplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN SUGAR COMPANY LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place,
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348078191660"
                                                            >08078191660</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >nassibnraffoul@fmnplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN PENNY RICE LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place,
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >sfalade@fmnplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    NIGERIAN EAGLE FLOUR MILLS
                                                    LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Toll Point,Ibadan/Lagos
                                                        Expressway, Eagle Flour
                                                        Road, Ibadan
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN PASTA FACTORY
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Block Xiii, Plots (7b &
                                                        8-14) Opic Industrial
                                                        Layout, Agbara, Igbesa,
                                                        Ogun State
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >prammos@goldenpastang.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN NOODLES
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        47, Eric Moore Road,
                                                        Iganmu, Lagos
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >goldenpannynoodles2goldenpastang.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    EAGLE FLOUR MILLS
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Eagle Flour Road, Lagos
                                                        Ibadan Express Toll
                                                        Point, Oyo State
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >kenne.louw@eagleflourmills.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    NIGER MILLS CALABAR
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        70 Murtala Mohammed
                                                        Highway, Calabar, Cross
                                                        River state.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="collapsible-header rel">
                                            Logistics & Support
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/d-arrow.svg"
                                                alt="d-arrow"
                                                class="d-arrow"
                                            />
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN SHIPPING COMPANY
                                                    LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >jadeleke@fmnplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    APAPA BULK TERMINAL LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place
                                                        Wharf Road, Apapa, Lago
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener">
                                                            jadeleke@fmnplc.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    GOLDEN PENNY POWER LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    IGANMU POWER CO. LIMITED
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        1, Golden Penny Place
                                                        Wharf Road, Apapa, Lagos
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    BAGCO LAGOS
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        34, Eric Moore Road
                                                        Iganmu Lagos Nigeria
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            href="tel:+2348075990556"
                                                            >08075990556</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >rogbaadewusi@bagco-ng.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    BAGCO LAGOS (MORPACK)
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        34, Eric Moore Road
                                                        Iganmu Lagos Nigeria
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+234012806767"
                                                        >
                                                            +234 (1)-2806767
                                                        </a>
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >RajatRath@bagco-ng.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    BAGCO NORTH
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Plot 47-49, Sharada
                                                        Industrial Estate, Phase
                                                        11, Kano, Nigeria
                                                    </span>
                                                    <br />
                                                    <span
                                                        >Tel:
                                                        <a
                                                            rel="noopener"
                                                            href="tel:+2348075990556"
                                                            >08075990556</a
                                                        ></span
                                                    >
                                                    <br />
                                                    <span
                                                        >Email:
                                                        <a rel="noopener"
                                                            >rogbaadewusi@bagco-ng.com</a
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="collapsible-header rel">
                                            List of Customer Service Centres
                                            <img
                                                src="https://flourmills.s3.eu-central-1.amazonaws.com/images/d-arrow.svg"
                                                alt="d-arrow"
                                                class="d-arrow"
                                            />
                                        </div>
                                        <div class="collapsible-body">
                                            <div class="location">
                                                <div class="bold-txt">Abia</div>
                                                <div class="addr">
                                                    <span>
                                                        9,Opobo Road, Ogbor
                                                        Hill, Aba, Abia State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Abuja F.C.T
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Plot 340, Obafemi
                                                        Awolowo Way (by Lento
                                                        Aluminum), Jabi Life
                                                        Camp Junction, Abuja.
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Anambra
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        MDS Depot Plot 5, Bridge
                                                        Head Industrial Layout,
                                                        (opposite Dozzy Oil and
                                                        Gas ltd, by GCM),
                                                        Onitsha
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Benue
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        MDS Depot 1 beach road,
                                                        New garage Makurdi,
                                                        Benue state
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Cross River
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Plot 2, Ekorinim
                                                        Industrial Layout (along
                                                        State Min. Of Works by
                                                        Calabar Sports Club),
                                                        Off MM Highway, Calabar,
                                                        Cross River State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Enugu
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        C2/C3, Old Airport Road,
                                                        Emene Industrial Estate,
                                                        Emene, Enugu
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Gombe
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        27, Bank Of The North
                                                        Road, (Opp. Fidelity
                                                        bank) Commercial Center,
                                                        Gombe, Gombe State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Katsina
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        Sharia Court Road
                                                        (beside Union Bank),
                                                        Katsina road, Funtua,
                                                        Katsina State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">Kogi</div>
                                                <div class="addr">
                                                    <span>
                                                        Warehouse 2, Lokoja
                                                        International Mkt.
                                                        Lokoja –Abuja Highway,
                                                        Lokoja, Kogi State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Lagos
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        FMN Factory Agbara, Opic
                                                        industrial 1 layout,
                                                        Block 8(7b/8/14) Igere
                                                        road, Agbara
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">Ondo</div>
                                                <div class="addr">
                                                    <span>
                                                        AKURE Beatron Commercial
                                                        Complex, (beside Mobil)
                                                        Ilesha Garage Road
                                                        Akure, Ondo State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Taraba
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        6b Off Barde Road, Along
                                                        Federal Medical Center
                                                        Road, Jalingo, Taraba
                                                        State
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <div class="bold-txt">
                                                    Zamfara
                                                </div>
                                                <div class="addr">
                                                    <span>
                                                        A.A Master Plaza 48,
                                                        Canteen Daji Area,
                                                        Gusau, Zamfara State
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageBanner from '~/components/PageBanner.vue';

export default {
    name: 'Contact',
    components: {
        PageBanner,
    },
    async asyncData({ $axios }) {
        const res = await $axios.get('pages?title=Contact');
        return { contact: res.data[0] };
    },
    mounted() {
        window.M = require('materialize-css');
        var elemsSelect = document.querySelectorAll('select');
        var elemsCollapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elemsCollapsible);
        M.FormSelect.init(elemsSelect);
    },
    data() {
        return {
            loading: false,
            data: {
                email: '',
                firstName: '',
                lastName: '',
                message: '',
                inquiry: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                this.loading = true;
                const res = await this.$axios.post('contact-uses', this.data);
                this.loading = false;
                if (res.status === 200) {
                    this.data = {
                        email: '',
                        firstName: '',
                        lastName: '',
                        message: '',
                        inquiry: '',
                    };
                    // alert('Message submitted successfully');
                    M.toast({
                        html: '<i class="material-icons">check_circle</i> <span style="padding-left: 10px;">Message submitted successfully</span>',
                        displayLength: 4000,
                    });
                } else {
                    // alert(res.data || res.statusText);
                    M.toast({
                        html:
                            '<i class="material-icons">error_outline</i> <span style="padding-left: 10px;">' +
                                res.data || res.statusText + '</span>',
                        displayLength: 4000,
                    });
                }
            } catch (error) {
                // alert(error.message);
                M.toast({
                    html:
                        '<i class="material-icons">error_outline</i> <span style="padding-left: 10px;">' +
                        error.message +
                        '</span>',
                    displayLength: 4000,
                });
                this.loading = false;
            }
        },
    },
};
</script>

<!--<style src="~/assets/css/contact.css" scoped></style>-->

<style scoped>
.theme-light a {
    color: black;
}

.theme-dark a {
    color: #60646c;
}

#body-div a:hover {
    text-decoration: underline;
}

.theme-light h5,
.bold-txt {
    color: #60646c;
}

.bold-txt {
    font-family: var(--font);
    font-weight: 600;
}

.social-links {
    margin: 10px 0;
}

a.social-icon {
    margin: 0 2px;
}

a.social-icon img {
    width: 30px;
}

.contact-img-div img {
    width: 50px;
    position: relative;
    top: 2px;
}

.select-wrapper .caret {
    z-index: 1;
}

h5.pref-platform-txt {
    font-size: 1.48rem;
    line-height: 1;
}

button.submit-btn {
    background: #6c707a !important;
    border: none;
    color: white;
    padding: 15px 28px;
    font-size: 13px;
    cursor: pointer;
}

.select-wrapper .caret {
    right: 2px;
    z-index: 1;
}

.locations-div.gray-bg {
    padding: 0;
    margin-top: 0;
}

.location .bold-txt {
    font-size: 13px;
    line-height: 1.2;
}

.addr {
    line-height: 1.2;
    font-size: 13px;
    font-family: var(--font-lite);
    color: #60646c;
}

.location {
    margin: 15px 0;
}

.contact-detail-div i.material-icons.pry-color {
    font-size: 10px;
}

.contact-detail-div a {
    width: 100%;
    line-height: 1.5;
}
.contact-detail-div a:nth-child(2),
.contact-detail-div a:nth-child(5),
.contact-detail-div a:nth-child(8) {
    padding-left: 10px;
}

.contact--div {
    margin: 15px 0 20px;
}

.cddd {
    position: relative;
    top: -3px;
}

h5.bold-txt {
    font-weight: 600;
    font-family: var(--font);
}

section#map-div {
    margin-top: -30px;
}

.contact-detail-div i.material-icons.pry-color {
    font-size: 10px;
}

.contact-detail-div a {
    width: 100%;
    line-height: 1.5;
}

.cddd {
    position: relative;
    top: -3px;
}

.collapsible .location:first-child {
    margin-top: 0px !important;
}

img.d-arrow {
    position: absolute;
    right: 5%;
    width: 15px;
    top: 40%;
    transition: 1s;
}

.collapsible-header.rel {
    font-weight: 600;
    color: #60646c;
}

.active img.d-arrow {
    transform: rotate(180deg);
}

@media (max-width: 360px) {
    h5.pref-platform-txt {
        font-size: 1.38rem;
        line-height: 1;
    }
}

@media (max-width: 992px) {
    /* .contact-detail-div i.material-icons.pry-color{
            display: none;
        } */
    .contact-img-div img {
        width: 35px;
    }
}

@media (max-width: 600px) {
    #map-div .container {
        width: 100%;
    }

    .mapouter,
    .gmap_canvas,
    .gmap_canvas iframe {
        height: 200px !important;
    }

    .form-div {
        margin-bottom: 30px;
    }

    .locations-div.gray-bg {
        padding: 10px;
    }
}

.input-field input::placeholder,
.input-field input::-moz-placeholder,
.input-field input::-webkit-input-placeholder {
    color: black !important;
    opacity: 1 !important;
}

.contact-detail-div {
    line-height: 1.2;
    font-size: 14px;
    margin-left: 10px;
}

.form-div .input-field textarea#message {
    height: 100px !important;
    background: #f4f4f5;
    width: 100%;
    padding: 0.8rem !important;
    border: none;
}
</style>

<style>
.form-div .input-field {
    margin: 5px 0;
}
.form-div .input-field input {
    border: none !important;
    background: #f4f4f5 !important;
    padding: 5px 10px !important;
    width: calc(100% - 20px);
}
.select-wrapper .caret {
    z-index: 1;
}
</style>
