<template>
    <!--=== Cookies Section ===-->
    <div class="cookie-banner cookies-notice" style="display: none">
        <div class="container">
            <div class="text-justify mag-bottom-0">
                <span>This website uses </span><b class="bold-txt">cookies</b> <br/>
                We use cookies to personalise content and ads, to provide social media
                features and to analyse our traffic. We also share information about
                your use of our site with our social media, advertising and analytics
                partners who may combine it with other information that you’ve provided
                to them or that they’ve collected from your use of their services.
                <div style="margin-top: 10px; display: flex">
                    <div style="flex-grow: 1">
                        Check our
                        <a rel="noopener" href="/cookies-policy" class="bold-txt black-txt"
                        >Cookies Policy</a
                        >.
                    </div>
                    <form action="#">
                        <button id="acceptPolicyBtn">I Accept</button>
                    </form>
                </div>
            </div>
        </div>
        <button class="close-cookies">&times;</button>
    </div>
    <!--=== end of Cookies Section ===-->
</template>

<script>
    export default {
        name: 'CookiesPolicy',
        mounted() {
            window.$ = require('jquery')

            if (localStorage.getItem('cookieSeen') != 'shown') {
                $('.cookie-banner')
                .delay(2000)
                .fadeIn();
                localStorage.setItem('cookieSeen', 'shown');
            }

            $('.close-cookies').click(function () {
                $('.cookie-banner').fadeOut();
            });

            $('#acceptPolicyBtn').click(function (e) {
                e.preventDefault();
                $('.cookie-banner').fadeOut();
            });
        }
    };
</script>

<style></style>
