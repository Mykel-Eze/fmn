<template>
    <section id="aboutus-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="col s6 m4 l4">
                        <nuxt-link to="/logistics" id="tab-1">
                          Bagco
                        </nuxt-link>
                    </div>
                    <div class="col s6 m4 l4">
                        <nuxt-link to="/abtl" id="tab-2">
                          ABTL
                        </nuxt-link>
                    </div>
                    <div class="col s12 m4 l4">
                        <nuxt-link to="/gtc" id="tab-3">
                          Golden Transport Company
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LogisticsPageSubNav'
    };
</script>

<style scoped>
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

    .bagco-page #tab-1 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .abtl-page #tab-2 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .gtc-page #tab-3 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    @media (min-width: 993px) {
        #aboutus-sub-nav .row .col.l2 {
            width: 20%;
        }

        #aboutus-sub-nav .row .col.l2:first-child {
            padding-left: 0;
        }

        #aboutus-sub-nav .row .col.l2:last-child {
            padding-right: 0;
        }
    }

    @media (max-width: 330px) {
        .tab-view a {
            padding: 10px 2px;
            font-size: 11px;
        }
    }
</style>
<style>
.tab-view a:hover{
    background-color: #e1e1e1;
}
</style>
