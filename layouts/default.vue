<template>
    <div>
        <Navbar />
        <div id="main-contents-wrapper">
            <Nuxt />
        </div>
        <CookiesPolicy />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    mounted() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = `window.__lc = window.__lc || {};
                window.__lc.license = 12062862;
                (function() {
                    var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
                    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
                })();`;
        const noscript = document.createElement('noscript');
        noscript.textContent = `<a href="https://www.livechatinc.com/chat-with/12062862/" rel="nofollow">Chat with us</a>,
                powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`;
        document.body.append(script);
        document.body.append(noscript);
    },
});
</script>

<style>
#main-contents-wrapper {
    min-height: 80vh;
    width: 100%;
    margin-top: 20px;
    /* background: rebeccapurple; */
    height: auto;
    /* padding-bottom: 20px; */
    font-size: 14px;
}

nav.trans-nav ul#dropdown1 > li > a {
    color: black;
}

a.dropdown-trigger:focus {
    outline: none;
}
</style>
