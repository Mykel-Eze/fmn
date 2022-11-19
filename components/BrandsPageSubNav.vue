<template>
    <section id="aboutus-sub-nav">
        <div class="row">
            <div class="container">
                <div class="tab-view">
                    <div class="col s6 m4 l4">
                        <nuxt-link to="/foods" id="tab-1">
                            Pasta & Noodles
                        </nuxt-link>
                    </div>
                    <!-- <div class="col s6 m4 l3">
                        <nuxt-link to="/foods/impulse-foods" id="tab-2">
                            Impulse Foods
                        </nuxt-link>
                    </div> -->
                    <div class="col s6 m4 l4">
                        <nuxt-link to="/foods/ball-foods" id="tab-3">
                            Ball Foods
                        </nuxt-link>
                    </div>
                   <!-- <div class="col s6 m6 l3">
                       <nuxt-link to="/foods/oil-and-spreads" id="tab-4">
                           Oil & Spreads
                       </nuxt-link>
                   </div> -->
                    <div class="col s12 m4 l4">
                        <nuxt-link to="/foods/flour" id="tab-5">
                            Flour
                        </nuxt-link>
                    </div>
                    <!-- <div class="col s6 m4 l2">
                      <nuxt-link :to="{ name: 'Sugar' }" id="tab-6">
                        Sugar
                      </nuxt-link>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BrandsPageSubNav'
    };
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

    .pastanoodles-page #tab-1 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .impulse-page #tab-2 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .ballFoods-page #tab-3 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .oilandspreads-page #tab-4 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .flour-page #tab-5 {
        background-color: #60646c;
        color: white;
        font-weight: bold;
    }

    .sugar-page #tab-6 {
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
