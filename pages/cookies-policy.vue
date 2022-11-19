<template>
    <div>
        <!--=== Page Banner Section ===-->
        <PageBanner
            pageTitle="Cookies Policy"
            pageCrumbName="Cookies Policy"
            class="aboutUs-page policy-page"
        />
        <!--=== end of Page Banner Section ===-->

        <!--=== Text Wrapper Section ===-->
        <section id="texts-wrapper">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0-xs">
                        <div>
                            <p>
                                This Cookies Policy (Policy) explains how we use cookies and the choices 
                                you have. Except as otherwise stated in this Policy, our Privacy Policy 
                                will apply to our processing of data that we collect via cookies. You 
                                can access our Privacy Policy via this
                                <nuxt-link to="/privacy-policy" class="pry-color bold-txt">link</nuxt-link>.
                            </p>
                            <p>
                                By using our website (by clicking, navigating or scrolling), you are consenting to 
                                our use of cookies in accordance with this Policy. If you do not agree to our use 
                                of cookies, you can prevent the installation of cookies through the settings of your 
                                browser or not use our website at all. However, if you disable the use of cookies, 
                                this might cause some parts of this website not to function properly for you and 
                                it may impact your user experience on this site. 
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">What are Cookies? </h5>
                            <p>
                                Cookies are messages or small files that are placed on your web browser when 
                                you visit an internet site. Cookies are useful and do a lot of different things, 
                                including allowing a website to recognize a user’s device, improving online 
                                experience etc.
                            </p>
                        </div>
                        <div>
                            <h5 class="bold-txt">How and Why do we Use Cookies? </h5>
                            <p>
                                We use cookies when you access our websites and our online products and 
                                services to make the site work better and to help us understand how you 
                                use our site. 
                            </p>
                            <p>
                                Cookies enable us to offer tailored products and to understand the 
                                information we receive about you, including information about your use 
                                of other websites and apps, whether or not you have an account with us.
                            </p>
                            <p>
                                Cookies help us provide, protect and improve our products and services, 
                                by personalizing, tailoring and measuring the services and products we 
                                provide for satisfactory and safe experience. We also use them to help 
                                authentication of user, assess performance and functionality of our 
                                online products and services, and analytical research.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Text Wrapper Section ===-->
    </div>
</template>

<script>
  import PageBanner from '~/components/PageBanner.vue';
  export default {
        name: 'CookiesPolicy',
        components: {
            PageBanner
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
/* @import url('../assets/css/policy.css'); */
section#texts-wrapper ol {
    padding-left: 20px;
}
section#texts-wrapper {
    margin-bottom: 30px;
}
</style>
