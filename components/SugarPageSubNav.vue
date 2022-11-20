<template>
    <section id="aboutus-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="col s12 m6 l6">
                        <nuxt-link rel="noopener" class="links--about" to="/divisions/sugar/golden-sugar-company" id="tab-1">
                            Golden Sugar Company, Apapa Refinery
                        </nuxt-link>
                    </div>
                    <div class="col s12 m6 l6">
                        <nuxt-link to="/divisions/sugar/sunti-golden-sugar-estate" id="tab-2">
                            Sunti Golden Sugar Estate
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'SugarPageSubNav',
});
</script>

<style scoped>
@import url('~assets/css/about.css');

#tab-1 {
    border-color: #83c38e;
}

#tab-2 {
    border-color: #e0e452;
}

#tab-3 {
    border-color: #e5b3b5;
}

#tab-4 {
    border-color: #b0d865;
}

#tab-5 {
    border-color: #54a9d2;
}

#tab-6 {
    border-color: #e0e452;
}

.goldenSugar-page #tab-1 {
    background-color: #60646c;
    color: white;
}

.sunti-page #tab-2 {
    background-color: #60646c;
    color: white;
}


@media (max-width: 330px) {
    .tab-view a {
        padding: 10px 2px;
        font-size: 11px;
    }
}
</style>
