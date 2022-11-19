<template>
    <section id="aboutus-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="col s6 m4 l3">
                        <nuxt-link rel="noopener" class="links--about" to="/priority-areas/backward-integration" id="tab-1">
                            Backward Integration
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link rel="noopener" to="/priority-areas/feeding-the-nation" id="tab-2">
                            Feeding the Nation Everyday
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link rel="noopener" to="/priority-areas/diversity-and-inclusion" id="tab-3">
                            Diversity and Inclusion
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link rel="noopener" to="/priority-areas/community-investment" id="tab-4">
                            Community Investment
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
    name: 'PriorityPageSubNav',
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

.backwardIntegration-page #tab-1 {
    background-color: #60646c;
    color: white;
}

.feedingTheNation-page #tab-2 {
    background-color: #60646c;
    color: white;
}

.diversityInclusion-page #tab-3 {
    background-color: #60646c;
    color: white;
}

.communityInvestment-page #tab-4 {
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
