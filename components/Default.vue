<template>

    <div>
        <Navbar/>
        <div id="main-contents-wrapper">
            <slot/>
        </div>
        <CookiesPolicy/>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar';
    import Footer from '~/components/Footer';
    import CookiesPolicy from '~/components/CookiesPolicy';

    export default {
        components: { CookiesPolicy, Footer, Navbar },
        mounted() {
            window.$ = require('jquery')
        }
    }
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
