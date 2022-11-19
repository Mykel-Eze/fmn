<template>
    <section id="aboutus-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="col s6 m4 l3">
                        <nuxt-link rel="noopener" class="links--about" to="/divisions/foods" id="tab-1">
                            Food
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link to="/divisions/agro-allied" id="tab-2">
                            Agro Allied
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link to="/divisions/sugar" id="tab-3">
                            Sugar
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l3">
                        <nuxt-link to="/divisions/support-services" id="tab-4">
                            Support Services
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
    name: 'DivisionsPageSubNav',
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

.aboutUs-page #tab-1 {
    background-color: #60646c;
    color: white;
}

.historyheritage-page #tab-2 {
    background-color: #60646c;
    color: white;
}

.visionmission-page #tab-3 {
    background-color: #60646c;
    color: white;
}

.boardmembers-page #tab-4 {
    background-color: #60646c;
    color: white;
}

.managementTeam-page #tab-5 {
    background-color: #60646c;
    color: white;
}

.subsidiaries-page #tab-6 {
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
